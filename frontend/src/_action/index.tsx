import { employee } from "../_reducers/employeeReducer";
import {
  addEmployeeActionCreator,
  deleteEmployeeActionCreator,
  editEmployeeActionCreator,
  fetchEmployeeActionCreator,
  fetchEmployeesActionCreator,
} from "../_types/actionCreatorTypes";

export const fetchEmployees: fetchEmployeesActionCreator = () => {
  return {
    type: "FETCH_EMPLOYEES",
  };
};

export const fetchEmployee: fetchEmployeeActionCreator = (id) => {
  return {
    type: "FETCH_EMPLOYEE",
    id,
  };
};

export const addEmployee: addEmployeeActionCreator = (employee) => {
  return {
    type: "ADD_EMPLOYEE",
    employee: employee,
  };
};

export const editEmployee: editEmployeeActionCreator = (
  editedEmployee: employee
) => {
  return {
    type: "EDIT_EMPLOYEE",
    editedEmployee,
  };
};

export const deleteEmployee: deleteEmployeeActionCreator = (id) => {
  return {
    type: "DELETE_EMPLOYEE",
    id,
  };
};
