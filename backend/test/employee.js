let mongoose = require("mongoose");
let Employee = require("../models/employee.js");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe("Employees", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Employee.remove({}, (err) => {
      done();
    });
  });
  /*
   * Test the /GET route
   */
  describe("/GET an employee", () => {
    it("it should GET all the employees", (done) => {
      chai
        .request(server)
        .get("/api/employees")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  /*
   * Test the /POST route
   */
  describe("/POST an employee", () => {
    it("it should not POST an employee without name field", (done) => {
      let employee = {
        dateOfBirth: "1992-02-02",
        gender: "Female",
        salary: 37,
      };
      chai
        .request(server)
        .post("/api/employees")
        .send(employee)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done();
        });
    });
    it("it should POST an employee ", (done) => {
      let employee = {
        name: "Jane Doe",
        dateOfBirth: "1992-02-02",
        gender: "Female",
        salary: 37,
      };
      chai
        .request(server)
        .post("/api/employees")
        .send(employee)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have
            .property("message")
            .eql("Employee successfully added!");
          done();
        });
    });
  });
  /*
   * Test the /GET/:id route
   */
  describe("/GET/:id employee", () => {
    it("it should GET an employee by the given id", (done) => {
      let employee = new Employee({
        name: "Jane Doe",
        dateOfBirth: "1993-02-02",
        gender: "Female",
        salary: 40,
      });
      console.log("heerrreeeerrer", employee._id.toString());
      employee.save((err, employee) => {
        console.log("employeeeeee", employee);
        chai
          .request(server)
          .get("/api/employees/" + employee._id.toString())
          .send(employee)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("name");
            res.body.should.have.property("dateOfBirth");
            res.body.should.have.property("gender");
            res.body.should.have.property("salary");
            done();
          });
      });
    });
  });
  /*
   * Test the /PUT/:id route
   */
  describe("/PUT/:id employee", () => {
    it("it should UPDATE an employee given the id", (done) => {
      let employee = new Employee({
        name: "John Doe",
        dateOfBirth: "1998-02-02",
        gender: "Male",
        salary: 50,
      });
      employee.save((err, employee) => {
        chai
          .request(server)
          .put("/api/employees/" + employee._id.toString())
          .send({
            name: "John Doe",
            dateOfBirth: "1998-02-02",
            gender: "Male",
            salary: 48,
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .eql("Employee was updated successfully.");
            done();
          });
      });
    });
  });
  /*
   * Test the /DELETE/:id route
   */
  describe("/DELETE/:id employee", () => {
    it("it should DELETE an employee given the id", (done) => {
      let employee = new Employee({
        name: "Foo Bar",
        dateOfBirth: "2000-02-02",
        gender: "Male",
        salary: 20,
      });
      employee.save((err, employee) => {
        chai
          .request(server)
          .delete("/api/employees/" + employee._id.toString())
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .eql("Employee was deleted successfully!");
            done();
          });
      });
    });
  });
});
