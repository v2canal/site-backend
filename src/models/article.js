const {Op,sequelize} = require('../connect/mysql')
const {Model,DataTypes}=require('sequelize')

class Article extends Model{}
Article.init(
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    title:{
      type:DataTypes.STRING
    },
    category:{
      type:DataTypes.STRING
    },
    text:{
      type:DataTypes.TEXT
    },
    text_html:{
      type:DataTypes.TEXT
    }
  },
  {
    sequelize,
    tableName:'article',
    Op
  }
)
module.exports=Article