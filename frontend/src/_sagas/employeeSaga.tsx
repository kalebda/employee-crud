import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../_types/actionsType";
import employeeApi from "../api/employee-api";

import history from "../history";

import { AxiosResponse } from "axios";
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
  fetchEmployeesAction,
  addEmployeeAction,
  deleteEmployeeAction,
  editEmployeeAction,
  fetchEmployeeAction,
} from "../_types/actionsType";

import { employee, employees } from "../_reducers/employeeReducer";

// watchers
function* employeeSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.FETCH_EMPLOYEE, fetchEmployeeWorker);
  yield takeEvery(actionIds.FETCH_EMPLOYEES, fetchEmployeesWorker);
  yield takeEvery(actionIds.ADD_EMPLOYEES, addEmployeesWorker);
  yield takeEvery(actionIds.EDIT_EMPLOYEES, editEmployeesWorker);
  yield takeEvery(actionIds.DELETE_EMPLOYEE, deleteEmployeesWorker);
}

// workers
function* fetchEmployeesWorker() {
  // fetch employees
  console.log("in fetch employeesssss");
  try {
    yield put({ type: "FETCH_EMPLOYEES_REQUEST" });
    const response: AxiosResponse<employee[]> = yield call(
      employeeApi.get,
      "/"
    );
    switch (response.status) {
      case 200:
        const data: fetchEmployeesSuccessAction = {
          type: "FETCH_EMPLOYEES_SUCCESS",
          payload: response.data,
        };
        yield put(data);
    }
  } catch (err) {
    const data: fetchEmployeesFailAction = {
      type: "FETCH_EMPLOYEES_FAIL",
    };
    yield put(data);
  }
}

function* addEmployeesWorker({ employee }: addEmployeeAction) {
  // create employee using api
  try {
    const response: AxiosResponse<employee> = yield call(
      employeeApi.post,
      "/",
      {
        employee: employee,
      }
    );
    switch (response.status) {
      case 200:
        const data: addEmployeeSuccessAction = {
          type: "ADD_EMPLOYEE_SUCCESS",
          payload: employee,
        };
        yield put(data);
        history.push("/");
    }
  } catch (err) {
    const data: addEmployeeFailAction = {
      type: "ADD_EMPLOYEE_FAIL",
    };
    yield put(data);
  }
  // update our redux store by dispatching a new action
}

function* deleteEmployeesWorker({ id }: deleteEmployeeAction) {
  //delete an employee
  try {
    const response: AxiosResponse<employee> = yield call(
      employeeApi.delete,
      `/${id}`
    );
    switch (response.status) {
      case 200:
        const data: deleteEmployeeSuccessAction = {
          type: "DELETE_EMPLOYEE_SUCCESS",
          id,
        };
        yield put(data);
        history.push("/");
    }
  } catch (err) {
    const data: deleteEmployeeFailAction = {
      type: "DELETE_EMPLOYEE_FAIL",
    };
    yield put(data);
  }
}

function* editEmployeesWorker({ editedEmployee }: editEmployeeAction) {
  //edit an employee
  try {
    const response: AxiosResponse<employee> = yield call(
      employeeApi.put,
      `/${editedEmployee.id}`
    );
    switch (response.status) {
      case 200:
        const data: editEmployeeSuccessAction = {
          type: "EDIT_EMPLOYEE_SUCCESS",
          payload: editedEmployee,
        };
        yield put(data);
        history.push("/");
    }
  } catch (err) {
    const data: editEmployeeFailAction = {
      type: "EDIT_EMPLOYEE_FAIL",
    };
    yield put(data);
  }
}

function* fetchEmployeeWorker({ id }: fetchEmployeeAction) {
  //fetch an employee
  console.log("please inhere");
  try {
    const response: AxiosResponse<employee> = yield call(
      employeeApi.get,
      `/${id}`
    );
    switch (response.status) {
      case 200:
        const data: fetchEmployeeSuccessAction = {
          type: "FETCH_EMPLOYEE_SUCCESS",
          payload: response.data,
        };
        yield put(data);
    }
  } catch (err) {
    const data: fetchEmployeeFailAction = {
      type: "FETCH_EMPLOYEE_FAIL",
    };
    yield put(data);
  }
}

export default employeeSaga;
