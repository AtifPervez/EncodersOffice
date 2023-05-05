const employeeAttendanceModel=require('../model/employeeAttendanceModel')

const createEmpAttendance=async(req,res)=>{

try {

   let data=req.body
   let createData=await employeeAttendanceModel.create(data)
   return res.status(201).send({status:true,msg:"employee attendance created successfully",data:createData})
    
} catch (error) {
    return res.status(500).send({status:false,msg:error.message})
}
}

const getEmpAttendance=async(req,res)=>{
    try {
    let getData=await employeeAttendanceModel.findAll()
    res.send({msg:getData})


    
} catch (error) {
    return res.status(500).send({status:false,msg:error.message})
}
}

module.exports={createEmpAttendance,getEmpAttendance}