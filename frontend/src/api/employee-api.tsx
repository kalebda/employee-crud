import axios from "axios";

const baseURL = "http://127.0.0.1:5000/api/employees";

const employeeApi = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default employeeApi;
