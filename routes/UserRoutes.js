const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const User = require('../model/UserModel');

router.post('/create', userController.createUser);
router.get('/allusers', userController.getUser);
router.get('/singleuser/:id', userController.singleUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;