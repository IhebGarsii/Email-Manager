const users = require("../models/users.models");
const validateUser = require("../validation/users.validation");
const AddUser = async (req, res) => {
  const { errors, isValid } = validateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await users.findOne({ Email: req.body.Email }).then((exist) => {
        if (exist) {
          errors.Email = "User exist";
          res.status(404).json(errors);
        } else {
          users.create(req.body);
          res.status(201).json({ message: "user added whith succes" });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const FindAllUsers = async (req, res) => {
  try {
    const data = await users.find();
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const FindSingelUser = async (req, res) => {
  try {
    const data = await users.findOne({ _id: req.params.id }, req.body, {
      new: true,
    });

    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateUser = async (req, res) => {
    const { errors, isValid } = validateUser(req.body);

  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await users.findOneAndUpdate({ _id: req.params.id });

      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteUser = async (req, res) => {
  try {
    const data = await users.deleteOne({ _id: req.params.id });

    res.status(201).json({ message: "usser deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddUser,
  FindAllUsers,
  FindSingelUser,
  UpdateUser,
  DeleteUser,
};
