import { Reducer } from "redux";
import history from "../history";

import _ from "lodash";
import {
  addEmployeeFailAction,
  addEmployeeSuccessAction,
  deleteEmployeeFailAction,
  deleteEmployeeSuccessAction,
  editEmployeeFailAction,
  editEmployeeSuccessAction,
  fetchEmployeeFailAction,
  fetchEmployeeSuccessAction,
  fetchEmployeesFailAction,
  fetchEmployeesSuccessAction,
  addEmployeeRequestAction,
  editEmployeeRequestAction,
  fetchEmployeeRequestAction,
  fetchEmployeesRequestAction,
} from "../_types/actionsType";

type actions =
  | addEmployeeFailAction
  | addEmployeeSuccessAction
  | deleteEmployeeFailAction
  | deleteEmployeeSuccessAction
  | editEmployeeFailAction
  | editEmployeeSuccessAction
  | fetchEmployeeFailAction
  | fetchEmployeeSuccessAction
  | fetchEmployeesFailAction
  | fetchEmployeesSuccessAction
  | addEmployeeRequestAction
  | editEmployeeRequestAction
  | fetchEmployeeRequestAction
  | fetchEmployeesRequestAction;

enum Gender {
  Male,
  Female,
}

export interface employee {
  id: number;
  name: string;
  dateOfBirth: string;
  salary: number;
  gender: Gender;
}

export interface employees {
  [id: number]: employee;
}

export interface EmployeesState {
  items: employees;
  loading: boolean;
  error: String | null;
}

const initialState = {
  items: {},
  loading: false,
  error: null,
};

export const employeeReducer: Reducer<EmployeesState, actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "EDIT_EMPLOYEE_REQUEST":
    case "ADD_EMPLOYEE_REQUEST":
    case "FETCH_EMPLOYEES_REQUEST":
    case "FETCH_EMPLOYEE_REQUEST":
      return { ...state, loading: true };
    case "ADD_EMPLOYEE_FAIL":
    case "FETCH_EMPLOYEES_FAIL":
    case "FETCH_EMPLOYEE_FAIL":
      return { ...state, loading: false };

    case "FETCH_EMPLOYEE_SUCCESS":
    case "ADD_EMPLOYEE_SUCCESS":
      const { id } = action.payload;
      return {
        ...state,
        items: { ...state.items, [id]: action.payload },
        loading: false,
      };

    case "FETCH_EMPLOYEES_SUCCESS":
      return {
        ...state,
        items: { ...state.items, ..._.mapKeys(action.payload, "id") },
        loading: false,
      };

    case "DELETE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        items: { ..._.omit(state.items, action.id) },
      };

    default:
      return state;
  }
};
