const express=require('express')
const router=express.Router()

const employeeController=require('../controller/employeeController')
const employeeAttendanceReportController=require('../controller/employeeAttendanceReporController')

//EmployeeApi
router.post('/post',employeeController.createEmployee)
router.get('/get',employeeController.getEmployee)
router.delete('/delete/:id',employeeController.deleteEmployee)

//EmployeeAttendanceReportApi
router.post('/createAttendance',employeeAttendanceReportController.createEmpAttendanceReport)
router.get('/getAttendance',employeeAttendanceReportController.getEmpAttendanceReport)

module.exports=router