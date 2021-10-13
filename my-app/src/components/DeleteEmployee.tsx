import { useState, useEffect } from "react";
import history from "../history";
import DeleteDialog from "./Modal/DeleteDialog";
import { connect } from "react-redux";
import { RootState } from "../_reducers";

import { RouteComponentProps } from "react-router";
import { fetchEmployee, deleteEmployee } from "../_action/index";
import {
  deleteEmployeeActionCreator,
  fetchEmployeeActionCreator,
} from "../_types/actionCreatorTypes";
import { employee } from "../_reducers/employeeReducer";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

interface EmployeeDeleteProps extends RouteComponentProps<OwnPropsParams> {
  employee: employee;
  fetchEmployee: fetchEmployeeActionCreator;
  deleteEmployee: deleteEmployeeActionCreator;
}

const DeleteEmployee: React.FC<EmployeeDeleteProps> = ({
  deleteEmployee,
  employee,
  fetchEmployee,
  match,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchEmployee(Number(match.params.id));
  }, [fetchEmployee]);

  //   if (loading) return <p>Deleting...</p>;
  //   if (error) return <p>Error</p>;

  function renderActions() {
    const { id } = match.params;
    return (
      <>
        <Button
          onClick={() => deleteEmployee(Number(id))}
          variant="outlined"
          color="error"
        >
          Error
        </Button>
        <Button component={Link} to="/" variant="contained" color="success">
          Success
        </Button>
      </>
    );
  }

  function renderContent() {
    if (!employee) {
      return "Are you sure?";
    }
    return (
      <div>
        You are going to delete an Employee
        <p>Are you sure?</p>
      </div>
    );
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <DeleteDialog
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push("/")}
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

export default connect(mapStateToProps, { fetchEmployee, deleteEmployee })(
  DeleteEmployee
);
