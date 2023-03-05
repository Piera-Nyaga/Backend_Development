import { Router } from "express";
import { Homepage, loginUser, RegisterUser, updateUser } from "../Controller/authController";
import { VerifyToken } from "../Middlewares/VerifyToken";



const authrouter =Router()

authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
authrouter.put('/:id', updateUser)
authrouter.get('/home',VerifyToken, Homepage)//protected Route

export default authrouter