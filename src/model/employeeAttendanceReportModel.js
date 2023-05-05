const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const emoloyeeAttendanceReport=sequelize.define('eve_acc_employee_attendance_report',{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    empId :{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    gradeId:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    appriserId:{
        type: Sequelize.STRING,
        defaultValue: null,
    }  ,
    reviewerId:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    managerId:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    status:{
        type: Sequelize.ENUM,
        values: ['A', 'I','D'],
        allowNull:false,
        defaultValue: 'A'
    },
        
    createdByBranch:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    createdDate:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    createdSession:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    createdIp:{
         type: Sequelize.STRING,
        defaultValue: null,
    } ,
    createdBy:{
         type: Sequelize.STRING,
        defaultValue: null,
    } ,
    modifiedDate:{
         type: Sequelize.STRING,
        defaultValue: null,
    } ,
    modifiedSession:{
         type: Sequelize.STRING,
        defaultValue: null,
    } ,
    modifiedIp:{
         type: Sequelize.STRING,
        defaultValue: null,
    } ,
    modifiedBy:{
         type: Sequelize.STRING,
        defaultValue: null,
    } ,
    deletedBy:{
         type: Sequelize.STRING,
        defaultValue: null,
    },
})

module.exports=emoloyeeAttendanceReport




