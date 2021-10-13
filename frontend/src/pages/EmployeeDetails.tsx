import { useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";

import { connect } from "react-redux";
import { RootState } from "../_reducers";
import { RouteComponentProps } from "react-router";
import { employee } from "../_reducers/employeeReducer";
import { fetchEmployee } from "../_action/index";
import { fetchEmployeeActionCreator } from "../_types/actionCreatorTypes";

import moment from "moment";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Button from "@mui/material/Button";

interface EmployeeShowProps extends RouteComponentProps<OwnPropsParams> {
  employee: employee;
  fetchEmployee: fetchEmployeeActionCreator;
}

const EmployeeDetails: React.FC<EmployeeShowProps> = ({
  employee,
  fetchEmployee,
  match,
}) => {
  // const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    fetchEmployee(Number(match.params.id));
  }, [fetchEmployee]);

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" color="primary">
          {employee.name}
        </Typography>
        <Box mt={2} textAlign="center">
          {employee.gender}{" "}
          <Box display="inline" mx={1} color="grey.500">
            |
          </Box>{" "}
          {moment(employee.dateOfBirth).format("dddd Do MMMM YYYY")}
        </Box>

        <Box display="flex" borderTop={1} borderColor="grey.400" pt={5} mt={5}>
          <Box flexGrow={1} display="flex">
            <Box mr={0.5}>
              <Button
                component={RouterLink}
                to={"/employee/edit/" + employee.id}
                variant="outlined"
              >
                Edit
              </Button>
            </Box>
            <Box ml={0.5}>
              <Button
                component={RouterLink}
                to={"/employee/delete/" + employee.id}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
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
    post: state.employees.items[Number(ownProps.match.params.id)],
  };
}

export default connect(mapStateToProps, { fetchEmployee })(EmployeeDetails);
