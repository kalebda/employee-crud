import { combineReducers } from "redux";

import { employeeReducer, EmployeesState } from "./employeeReducer";

// const store = {
//   employees: employeeReducer,
// };

export interface RootState {
  readonly employees: EmployeesState;
}

export const rootReducer = combineReducers<RootState>({
  employees: employeeReducer,
});
