const Employee = require("../models/employee.js");

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.employee.name) {
    console.log(
      req.body.employee.name,
      req.body.employee.dateOfBirth,
      req.body.employee.salary,
      req.body.employee.gender
    );
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an Employee
  const employee = new Employee({
    name: req.body.employee.name,
    dateOfBirth: req.body.employee.dateOfBirth,
    salary: req.body.employee.salary,
    gender: req.body.employee.gender,
  });

  // Save Employee in the database
  employee
    .save(employee)
    .then((data) => {
      res.status(200).send({
        data: data,
        message: "Employee successfully added!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating an Employee.",
      });
    });
};

//Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  Employee.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employee.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Employee with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Employee with id=" + id });
    });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found!`,
        });
      } else res.send({ message: "Employee was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id,
      });
    });
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`,
        });
      } else {
        res.send({
          message: "Employee was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id,
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Employee.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Employees were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all employees.",
      });
    });
};
