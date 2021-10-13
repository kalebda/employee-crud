import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/employee/add" component={AddEmployee} />
        <Route path="/employee/edit/:id" component={EditEmployee} />
        <Route path="/employee/delete/:id" component={DeleteEmployee} />
        <Route path="/employee/:id" component={EmployeeDetails} />
      </Switch>
    </Layout>
  );
}

export default App;
