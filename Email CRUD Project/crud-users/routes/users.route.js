const express = require("express");
const { route } = require("../app");
const {
  AddUser,
  FindAllUsers,
  FindSingelUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controllers");
const router = express.Router();

/* ADD USER */
router.post("/users", AddUser);
/* FIND USER */
router.get("/users", FindAllUsers);
/* FIND SINGEL USER */
router.get("/users/:id", FindSingelUser);
/* ADD USER */
router.put("/users/:id", UpdateUser);
/* DELETE USER */
router.delete("/users/:id", DeleteUser);

module.exports = router;
