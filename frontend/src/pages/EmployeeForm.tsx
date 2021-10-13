import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import { employee } from "../_reducers/employeeReducer";
import { Field, Formik, FieldProps, FormikProps } from "formik";
import * as Yup from "yup";

import { Gender } from "../components/AddEmployee";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

// enum Gender {
//   Male,
//   Female,
// }

export interface FormValues {
  name: string;
  dateOfBirth: string;
  salary: number;
  gender: Gender;
}

export type OwnEmployeeFormPrpropsops = {
  onSubmit: (employee: employee) => void;
  initialValues: FormValues;
  currentEmployee?: employee;
};

export type OwnInnerFieldProps = FieldProps<FormValues> & FormValues;

export const EmployeeForm: React.FC<OwnEmployeeFormPrpropsops> = (props) => {
  const enchanceId = (values: FormValues): employee => {
    return {
      ...values,
      id: props.currentEmployee
        ? props.currentEmployee.id
        : Math.round(Math.random() * 10e4),
    };
  };

  const styles = {
    mbFormField: 3,
    mtFormSubmit: 5,
  };
  const gender = "gender";
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={(values: FormValues) => {
        console.log("values: ", values);
        props.onSubmit(enchanceId(values));
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required."),
        salary: Yup.number().required("Salary is required."),
      })}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        setFieldValue,
      }) => (
        <Container maxWidth="sm">
          <Box mt={1} mb={5}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              color="primary"
            >
              Add/Edit an Employee
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box mb={styles.mbFormField}>
              <TextField
                error={Boolean(touched.name && errors.name)}
                fullWidth
                helperText={touched.name && errors.name}
                label="Full Name"
                margin="normal"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                variant="outlined"
              />
            </Box>
            <Box mb={styles.mbFormField}>
              <TextField
                error={Boolean(touched.salary && errors.salary)}
                fullWidth
                helperText={touched.salary && errors.salary}
                label="Salary"
                margin="normal"
                name="salary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.salary}
                variant="outlined"
              />
            </Box>
            <Box mb={styles.mbFormField}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender:</FormLabel>
                <RadioGroup
                  name={gender}
                  value={values.gender.toString()}
                  onChange={(event) => {
                    setFieldValue(gender, event.currentTarget.value);
                  }}
                >
                  <FormControlLabel
                    value={Gender.Male.toString()}
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value={Gender.Female.toString()}
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box mb={styles.mbFormField}>
              <FormLabel component="legend">Date of Birth:</FormLabel>
              <Field type="date" name="dateOfBirth" />
            </Box>

            <Box mt={styles.mtFormSubmit}>
              <FormControl>
                <Box display="flex">
                  <Box mr={0.5}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </form>
        </Container>
      )}
    </Formik>
  );
};
