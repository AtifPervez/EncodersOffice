const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const { text } = require('express')

const employee = sequelize.define('eve_acc_employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    employeeName: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeAddress: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeePincode: {
        type: Sequelize.TEXT,
        defaultValue: null,
    },
    employeeEmail: {
        type: Sequelize.STRING,
        defaultValue: null,

    },
    employeeMobile: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeUsername: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    loginThrough: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeGender: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDob: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDoj: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDoa: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeAadhar: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeVoter: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeePAN: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeUAN: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeESIC: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeCode: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDesignation: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDesignationSince: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDesignationId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeSubDesignation: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeSubDesignationId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDepartment: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeDepartmentId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeSubDepartmentId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeProfilePic: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeFcmId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeSubCompanyId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    employeeSubcompanyName: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeCostCenterDivision: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    salaryTemplateId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    gratuityAct: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeBranchId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeBranchName: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employmentLeaveType: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employmentLeaveDate: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    bankName: {
        type: Sequelize.STRING,
        defaultValue: null,
    },

    accNumber: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    accountType: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    accHolderName: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    IFSCnum: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeCurrentStatus: {
        type: Sequelize.ENUM,
        values: ['joining', 'termination', 'resignation', 'release', 'offerletter', 'Active', 'Inactive'],
        defaultValue: null
    },
    KYCStatus: {
        type: Sequelize.ENUM,
        values: ['Completed', 'Pending'],
        defaultValue: 'Pending'
    },
    branchName: {
        type: Sequelize.STRING,
        defaultValue: null,
    },

    locationID: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    
        
    is_salary_hold :{
        type:Sequelize.ENUM,
        values:['no','yes'],
        defaultValue:"no"
    }, 
    emailVisibility:{
        type:Sequelize.ENUM,
        values:['no','yes'],
        defaultValue:"no"
    },
    mobileVisibility :{
          type:Sequelize.ENUM,
        values:['Public','Private'],
        defaultValue:"Private"
    }, 
    HOD:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,


    reportTo:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,

    isOvertimeApplicable:{
        type:Sequelize.ENUM,
        values:['yes','no'],
        defaultValue:"no"
    } ,
    isExtraDutyApplicable :{
        type:Sequelize.ENUM,
        values:['yes','no'],
        defaultValue:"no"
    },
    empCheckListId:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    empHandoverCheckListId:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    empCheckListIdNew:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    empHandoverCheckListIdNew:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeSAPCode:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    TA_permission:{
        type:Sequelize.ENUM,
        values:['yes','no'],
        allowNull:false,
        defaultValue:"no"
    } ,
    taCreditLimit :{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    taCreditDate:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    TAmonth:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    TAyear:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeUserRoleId:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    employeeAdminAccess:{
        type:Sequelize.ENUM,
        values:['0','1'],
        allowNull:false,
        defaultValue:"0"
    } ,
    status:{
        type:Sequelize.ENUM,
        values:['A','I','D'],
        allowNull:false,
        defaultValue:"A",
    } ,
    employeeType:{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    firstPaymentStatus :{
        type:Sequelize.ENUM,
        values:['yes','no'],
        allowNull:false,
        defaultValue:"no",
    } ,
    createdDate :{
        type: Sequelize.STRING,
        defaultValue: null,
    },
    createdSession:{
        type: Sequelize.STRING,
        defaultValue: null,
    } ,
    createdIp:{
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
    anniversaryDate:{
         type: Sequelize.STRING,
        defaultValue: null,
    } ,
    tdsSlab:{
         type: Sequelize.STRING,
        defaultValue: null,
    },
   
})
module.exports=employee

















