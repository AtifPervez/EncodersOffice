const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const emoloyeeAttendance = sequelize.define('eve_acc_employee_attendence', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    empId: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    date: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    intime: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    outTime: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    attenCheck: {
        type: Sequelize.ENUM,
        values: ['Approved', 'Pending'],
        allowNull: false,
        defaultValue: 'Pending'
    },
    startLunch: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    endLunch: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    remarks: Sequelize.TEXT,
    commonRemarks: Sequelize.TEXT,
    outRemarks: Sequelize.TEXT,
    attenStatus: {
        type: Sequelize.ENUM,
        values: ['In', 'Out', 'Slunch', 'Elunch'],
        defaultValue: null
    },
    inLat: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    inlong: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    outLat: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    outLong: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    sLunchLat: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    sLunchLong: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    eLunchLat: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    eLunchLong: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    inCompDis: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    outCompDis: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    sLunchDis: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    eLunchDis: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    checkOutLocation: Sequelize.TEXT,
    type: {
        type: Sequelize.ENUM,
        values: ['normal', 'fly', 'biometric'],
        allowNull: false,
        defaultValue: "normal"
    },
    deviceVendor: {
        type: Sequelize.STRING,
        defaultValue: null,
    },

    flyCheckInRemarks: Sequelize.TEXT,

    status: {
        type: Sequelize.ENUM,
        values: ['A', 'I', 'D'],
        allowNull: false,
        defaultValue: "A"
    },
    intimeStatus: {
        type: Sequelize.ENUM,
        values: ['1', '0',],
        allowNull: false,
        defaultValue: "0"
    },
    outtimeStatus: {
        type: Sequelize.ENUM,
        values: ['1', '0',],
        allowNull: false,
        defaultValue: "0"
    },
    startLunchStatus: {
        type: Sequelize.ENUM,
        values: ['1', '0',],
        allowNull: false,
        defaultValue: "0"
    },
    endLunchStatus: {
        type: Sequelize.ENUM,
        values: ['1', '0',],
        allowNull: false,
        defaultValue: "0"
    },
    editHour: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    createdDate: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    createdSession: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    createdIp: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    modifiedDate: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    modifiedSession: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    modifiedIp: {
        type: Sequelize.STRING,
        defaultValue: null,
    },

})
module.exports=emoloyeeAttendance