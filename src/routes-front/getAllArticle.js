const express = require('express')
const router=express.Router()
const Article = require('../models/article')

router.get('/getAllArticle',async (request,response)=>{
  try{
    const data= await Article.findAll()
    return response.json({
      data,
    })
  }catch(e){
    return response.json({
      msg:e,
      code:500
    })
  }
})
module.exports=router