const employeeModel = require('../model/employeeModel')

const createEmployee = async (req, res) => {
    try {
        let data = req.body
        let getEmployeeData = await employeeModel.create(data)

        return res.status(201).send({ status: true, msg: "employeeData created successfully", data: getEmployeeData })


    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

const getEmployee = async (req, res) => {
    try {

        let getData = await employeeModel.findAll()
        res.status(200).send({ status: true, msg: "successfully get", data: getData })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

const deleteEmployee=async(req,res)=>{
    try {
        let id=req.params.id
        let deleteData=await employeeModel.destroy({
            where:{
                id:id
            }
        })
        return res.status(200).send({status:true,msg:deleteData})
        
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports = { createEmployee, getEmployee,deleteEmployee }

