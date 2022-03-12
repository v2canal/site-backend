const {Op,sequelize} = require('../connect/mysql')
const {Model,DataTypes}=require('sequelize')

class User extends Model{}
User.init(
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    username:{
      type:DataTypes.STRING
    },
    password:{
      type:DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName:'user',
    Op
  }
)
module.exports=User