import express from "express";
// import emailCheck from "../middlewares/emailCheck.js"
import verifyAccount from "../middlewares/vieifyAccount.js";
import {

    signup,
    login,
    forgotPassword,
    resetPassword
  } from "../controllers/authController.js"
import { validation } from "../validation/validation.js";
import { userLogIn, userValidationSchema } from "../validation/userValidation.js";
const router=express.Router()

router.post('/signup',validation(userValidationSchema),signup);
router.post('/login',validation(userLogIn),login)
router.post('/forgotPassword',forgotPassword);
router.patch('/resetPassword/:token',resetPassword);

 router.get('/verify/:token', verifyAccount)
export default router;