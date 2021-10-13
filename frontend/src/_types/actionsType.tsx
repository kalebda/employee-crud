import { employee, employees } from "../_reducers/employeeReducer";

// Defining types for Action Creator

// FETCH EMPLOYEES

export interface fetchEmployeesAction {
  type: "FETCH_EMPLOYEES";
}

// FETCH EMPLOYEE

export interface fetchEmployeeAction {
  type: "FETCH_EMPLOYEE";
  id: number;
}

// ADD EMPLOYEE

export interface addEmployeeAction {
  type: "ADD_EMPLOYEE";
  employee: employee;
}

// EDIT EMPLOYEE
export interface editEmployeeAction {
  type: "EDIT_EMPLOYEE";
  editedEmployee: employee;
}

// DELETE EMPLOYEE

export interface deleteEmployeeAction {
  type: "DELETE_EMPLOYEE";
  id: number;
}

//Defining Types for Reducers

//FETCH EMPLOYEES
export interface fetchEmployeesRequestAction {
  type: "FETCH_EMPLOYEES_REQUEST";
}

export interface fetchEmployeesSuccessAction {
  type: "FETCH_EMPLOYEES_SUCCESS";
  payload: employees;
}

export interface fetchEmployeesFailAction {
  type: "FETCH_EMPLOYEES_FAIL";
}

// FETCH EMPLOYEE
export interface fetchEmployeeRequestAction {
  type: "FETCH_EMPLOYEE_REQUEST";
}

export interface fetchEmployeeSuccessAction {
  type: "FETCH_EMPLOYEE_SUCCESS";
  payload: employee;
}

export interface fetchEmployeeFailAction {
  type: "FETCH_EMPLOYEE_FAIL";
}

// ADD EMPLOYEE

export interface addEmployeeRequestAction {
  type: "ADD_EMPLOYEE_REQUEST";
}

export interface addEmployeeSuccessAction {
  type: "ADD_EMPLOYEE_SUCCESS";
  payload: employee;
}

export interface addEmployeeFailAction {
  type: "ADD_EMPLOYEE_FAIL";
}

//EDIT EMPLOYEE

export interface editEmployeeRequestAction {
  type: "EDIT_EMPLOYEE_REQUEST";
}

export interface editEmployeeSuccessAction {
  type: "EDIT_EMPLOYEE_SUCCESS";
  payload: employee;
}

export interface editEmployeeFailAction {
  type: "EDIT_EMPLOYEE_FAIL";
}

//DELETE

export interface deleteEmployeeSuccessAction {
  type: "DELETE_EMPLOYEE_SUCCESS";
  id: number;
}

export interface deleteEmployeeFailAction {
  type: "DELETE_EMPLOYEE_FAIL";
}

export const actionIds = {
  FETCH_EMPLOYEES: "FETCH_EMPLOYEES",
  FETCH_EMPLOYEE: "FETCH_EMPLOYEE",
  ADD_EMPLOYEES: "ADD_EMPLOYEE",
  EDIT_EMPLOYEES: "EDIT_EMPLOYEE",
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
};
