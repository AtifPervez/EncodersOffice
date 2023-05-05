const employeeAttendanceReportModel = require('../model/employeeAttendanceReportModel')

const createEmpAttendanceReport=async(req,res)=>{
try {
    let data=req.body
    let createData=await employeeAttendanceReportModel.create(data)
    return res.status(201).send({status:true,msg:"employeeAttendanceReport successfully created",data:createData})
    
} catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
}
}


const getEmpAttendanceReport=async(req,res)=>{
try {
    let page=req.query.page
    let getEmployeeAttendance=await employeeAttendanceReportModel.findAll({
        limit:100,
        offset:(100*(page-1))
    });
    return res.status(200).send({status:true,msg:"Attendance Report get successfully",data:getEmployeeAttendance})
    
} catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
}


}
module.exports={createEmpAttendanceReport,getEmpAttendanceReport}