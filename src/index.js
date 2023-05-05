const express=require('express')
const router=require('./router/route')
const app=express()
const sequelize=require('./config/db')
app.use(express.json())




app.use('/',router)

sequelize.sync()
    
app.listen(3000,()=>{
    console.log('Express App is running on ',3000);
})

