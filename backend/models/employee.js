const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      min: 1930 - 01 - 01,
      max: Date.now,
    },
    gender: { type: String, enum: ["Male", "Female"] },
    salary: { type: Number, get: getSalary, set: setSalary },
  },
  { timestamps: true }
);
// Getter
function getSalary(num) {
  return (num / 100).toFixed(2);
}
// Setter
function setSalary(num) {
  return num * 100;
}

//id instead of _id
employeeSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

employeeSchema.plugin(mongoosePaginate);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
