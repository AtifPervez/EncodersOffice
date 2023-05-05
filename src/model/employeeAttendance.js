const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const emoloyeeAttendanceModel = sequelize.define('eve_acc_employee_attendence', {
id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true 
}, 
empId:{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
date:{
     type: Sequelize.STRING,
        defaultValue: null,
} ,
intime:{
     type: Sequelize.STRING,
        defaultValue: null,
} ,
outTime:{
     type: Sequelize.STRING,
        defaultValue: null,
} ,
attenCheck:{
    type: Sequelize.ENUM,
    values: ['Approved', 'Pending'],
    allowNull:false,
    defaultValue: 'Pending'
} ,
startLunch:{
    type: Sequelize.STRING,
    defaultValue: null,
},
endLunch:{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
remarks :Sequelize.TEXT, 
commonRemarks:Sequelize.TEXT,
outRemarks :Sequelize.TEXT,
attenStatus:{
    type: Sequelize.ENUM,
    values: ['In', 'Out','Slunch','Elunch'],
    defaultValue:null
},
inLat :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
inlong :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
outLat :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
outLong :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
sLunchLat :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
sLunchLong :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
eLunchLat :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
eLunchLong :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
inCompDis :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
outCompDis :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
sLunchDis :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
eLunchDis :{
    type: Sequelize.STRING,
    defaultValue: null,
} ,
checkOutLocation:Sequelize.TEXT,
type:{
    type: Sequelize.ENUM,
    values: ['normal', 'fly','biometric'],
    allowNull:false,
    defaultValue:"normal"
} ,
deviceVendor:{
    type: Sequelize.STRING,
    defaultValue: null,
},
flyCheckInRemarks:Sequelize.TEXT, 
status:{
    type: Sequelize.ENUM,
    values: ['A', 'I','D'],
    allowNull:false,
    defaultValue:"normal"
}
intimeStatus enum('1','0') 
outtimeStatus enum('1','0') 
startLunchStatus enum('1','0') 
endLunchStatus enum('1','0') 
editHour varchar(255) 
createdDate varchar(255) 
createdSession varchar(255) 
createdIp varchar(255) 
modifiedDate varchar(255) 
modifiedSession varchar(255) 
modifiedIp varchar(255)

})