const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");

/* GET users listing. */
router.get("/register", UsersController.register);
/* receber dados via formularios  */
router.post("/register/add", UsersController.registerUser); 
 



module.exports = router;


