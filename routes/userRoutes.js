const express = require("express");
const router=express.Router();
const {addUser,allUsers,singleUser,editUser,deleteUser,registerUser,Login}=require('../controllers/userController')

router.post('/addUser',addUser);
router.get('/allusers',allUsers);
router.get('/user/:id',singleUser);
router.put('/user/edit/:id',editUser);
router.delete('/user/delete/:id',deleteUser);
router.post('/register',registerUser );
router.post('/login',Login);











module.exports = router;