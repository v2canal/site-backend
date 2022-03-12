const Sequelize = require('sequelize')
const {Op} =require('sequelize')

const sequelize=new Sequelize('site-blog','root','123456',{
  host:'39.103.223.74',
  dialect:'mysql',
  port:3306,
  define:{
    timestamps:false
  }
})
module.exports={
  sequelize,
  Op
}