const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");

/* GET users listing. */
router.get("/register", UsersController.resgiter);
/* receber dados via formularios  */
router.post("/register/add", UsersController.registerUser); 

router.get("/login", UsersController.login);
router.post("/login", UsersController.loginUser);

router.get("/dashboard", UsersController.dashboard);
router.get("/logout", UsersController.logout);









module.exports = router;


