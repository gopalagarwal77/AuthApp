const express = require('express');
const router = express.Router();
const User = require('../models/User');

const {signup} =  require('../controllers/Auth');
const {login} = require('../controllers/Auth');

const{auth, isStudent , isAdmin} = require('../middlewares/auth');

router.post('/signup', signup);
router.post('/login', login);

// Testing Route for Middleware
router.get("/test", auth, (req,res) => {
    res.json({
        success: true,
        message: "Test successful"
    })
})

//Protected Route for Student
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Student"
    })
});

// Protected Route for Admin 
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
});


/*
router.get("/getEmail",auth,async(req,res)=>{
    try{
        const id = req.user.id;
        console.log("ID:" , id);
        const user = await User.findById(id);

        res.status(200).json({
            success:true,
            user:user,
            message:'Welcome to the email route',
        })
    }
    catch(error){
        res.status(500).json({
             success:false,
            error:error.message,
            message:'fatt gya code',
        })
    }
});
*/
module.exports=router;

// @route   POST api/auth