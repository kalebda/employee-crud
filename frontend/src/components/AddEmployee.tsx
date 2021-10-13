import { connect } from "react-redux";

import { FormValues, EmployeeForm } from "../pages/EmployeeForm";

import { addEmployeeActionCreator } from "../_types/actionCreatorTypes";
import { addEmployee } from "../_action/index";

export type OwnEmployeeNewProps = {
  addEmployee: addEmployeeActionCreator;
};

export enum Gender {
  Male = "Male",
  Female = "Female",
}

const initialValues: FormValues = {
  name: "",
  gender: Gender.Male,
  dateOfBirth: "",
  salary: 0,
};

console.log("initialValues", initialValues);

const AddEmployee: React.FC<OwnEmployeeNewProps> = (props) => {
  if (!props.addEmployee) {
    return null;
  }
  return (
    <EmployeeForm initialValues={initialValues} onSubmit={props.addEmployee} />
  );
};

export default connect(null, { addEmployee })(AddEmployee);
