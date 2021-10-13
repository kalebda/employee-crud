import { employee } from "../_reducers/employeeReducer";
import {
  fetchEmployeesAction,
  fetchEmployeeAction,
  addEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction,
} from "./actionsType";

export type fetchEmployeesActionCreator = () => fetchEmployeesAction;

export type fetchEmployeeActionCreator = (id: number) => fetchEmployeeAction;

export type addEmployeeActionCreator = (
  employee: employee
) => addEmployeeAction;

export type editEmployeeActionCreator = (
  editedEmployee: employee
) => editEmployeeAction;

export type deleteEmployeeActionCreator = (id: number) => deleteEmployeeAction;
