import express from "express";
import * as authController from "./controller/auth.controller.js";
import { verifyToken } from "../../utils/middleware.js";
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/update', verifyToken, authController.update);
router.delete('/delete', verifyToken, authController.deleteUser);
router.get('/getUsers', verifyToken, authController.getAllUsers);






export default router;