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
  fetchedEmployee: employee;
  fetchEmployee: fetchEmployeeActionCreator;
  editEmployee: editEmployeeActionCreator;
}

const EditEmployee: React.FC<EmployeeEditProps> = ({
  editEmployee,
  match,
  fetchEmployee,
  fetchedEmployee,
}) => {
  // const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    fetchEmployee(Number(match.params.id));
  }, [fetchEmployee]);

  if (!fetchedEmployee) {
    console.log("inhere");
    return null;
  }
  return (
    <EmployeeForm
      initialValues={_.pick(
        fetchedEmployee,
        "name",
        "gender",
        "salary",
        "dateOfBirth"
      )}
      onSubmit={editEmployee}
      currentEmployee={fetchedEmployee}
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
    fetchedEmployee: state.employees.items[Number(ownProps.match.params.id)],
  };
}

export default connect(mapStateToProps, { fetchEmployee, editEmployee })(
  EditEmployee
);
