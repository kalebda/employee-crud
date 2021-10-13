import { useEffect } from "react";

import { connect } from "react-redux";
import { RootState } from "../_reducers";

import _ from "lodash";

import {
  editEmployeeActionCreator,
  fetchEmployeeActionCreator,
} from "../_types/actionCreatorTypes";
import { fetchEmployee, editEmployee } from "../_action/index";
import { employee } from "../_reducers/employeeReducer";
import { RouteComponentProps } from "react-router";
// import { useParams } from "react-router-dom";

import { EmployeeForm } from "../pages/EmployeeForm";

interface EmployeeEditProps extends RouteComponentProps<OwnPropsParams> {
  employee: employee;
  fetchEmployee: fetchEmployeeActionCreator;
  editEmployee: editEmployeeActionCreator;
}

const EditEmployee: React.FC<EmployeeEditProps> = ({
  editEmployee,
  match,
  fetchEmployee,
  employee,
}) => {
  // const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    fetchEmployee(Number(match.params.id));
  }, [fetchEmployee]);

  if (!employee) {
    return null;
  }
  return (
    <EmployeeForm
      initialValues={_.pick(
        employee,
        "name",
        "gender",
        "salary",
        "dateOfBirth"
      )}
      onSubmit={editEmployee}
      currentEmployee={employee}
    />
  );
};

interface OwnPropsParams {
  id: string;
}

function mapStateToProps(
  state: RootState,
  ownProps: RouteComponentProps<OwnPropsParams>
) {
  return {
    employee: state.employees.items[Number(ownProps.match.params.id)],
  };
}

export default connect(mapStateToProps, { fetchEmployee, editEmployee })(
  EditEmployee
);
