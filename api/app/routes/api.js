import Router from 'express'
const router = Router()

import AuthController from '../controllers/authcontroller.js';
import UserController from '../controllers/usercontroller.js';
import verifyToken from '../middlewares/authjwt.js';
import EmployeeController from '../controllers/employeecontroller.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
 
router.get('/employees', EmployeeController.index)
router.post('/employees', EmployeeController.create)
router.put('/employees/:id', EmployeeController.update)
router.delete('/employees/:id', EmployeeController.destroy)

export default router
