const express = require('express')
const router=express.Router()
const Article = require('../models/article')

router.post('/publish',async (request,response)=>{
  const {title,text,category,text_html}=request.body
  try{
    console.log(request.body)
    const result=await Article.create({
      id:Date.now(),
      title,
      category,
      text,
      text_html,
    })
    return response.json({result,msg:'publish success',code:200})
  }catch(e){
    return response.json({
      msg:e,
      code:500
    })
  }
})
module.exports=router