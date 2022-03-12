const express = require('express')
const router = express.Router()
const Article = require('../models/article')
router.get('/getArticleById',async ( request,response)=>{
  const {id} = request.query
  try{
    await Article.findOne({
      where:{
        id:id
      }
    }).then(data=>{
      return response.json({data,code:200})
    }).catch(err=>{
      return response.json({err,code:500})
    })
  }catch (e){
    console.log(e)
  }
})
module.exports=router

