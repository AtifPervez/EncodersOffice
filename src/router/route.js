const express=require('express')
const router=express.Router()

const employeeController=require('../controller/employeeController')
const employeeAttendanceReportController=require('../controller/employeeAttendanceReporController')
const employeeAttendanceController=require('../controller/employeeAttendanceController')

//EmployeeApi
router.post('/post',employeeController.createEmployee)
router.get('/get',employeeController.getEmployee)
router.delete('/delete/:id',employeeController.deleteEmployee)

//EmployeeAttendanceReportApi
router.post('/createAttendanceReport',employeeAttendanceReportController.createEmpAttendanceReport)

router.get('/getAttendance',employeeAttendanceReportController.getEmpAttendanceReport)


//EmployeeAttendance Api
router.post('/createAttendance',employeeAttendanceController.createEmpAttendance)

router.get('/getEmpAttendance',employeeAttendanceController.getEmpAttendance)

module.exports=router