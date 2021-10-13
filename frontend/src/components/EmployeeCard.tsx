import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { employee } from "../_reducers/employeeReducer";

import Button from "@mui/material/Button";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

interface Props {
  employee: employee;
}

const EmployeeCard: React.FC<Props> = ({ employee }) => {
  const [isRaised, setIsRaised] = useState(false);

  return (
    <Card
      raised={isRaised}
      onMouseOver={() => setIsRaised(true)}
      onMouseOut={() => setIsRaised(false)}
    >
      <CardHeader
        avatar={
          <Avatar aria-label={`Employee: ${employee.name}`}>
            {employee.name.substr(0, 1)}
          </Avatar>
        }
        title={
          <Link to={`employee/${employee.id}`} component={RouterLink}>
            <Box fontWeight="fontWeightBold">{employee.name}</Box>
          </Link>
        }
        subheader={employee.gender}
      />
      <CardContent>
        <Typography>{employee.salary}</Typography>
        <Typography>{employee.dateOfBirth}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to={"/employee/edit/" + employee.id}
          variant="outlined"
        >
          Edit
        </Button>
        <Button
          component={RouterLink}
          to={"/employee/delete/" + employee.id}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
