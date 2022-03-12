const express = require('express')
const router  = express.Router()
const User = require('../models/user')
const {request, response} = require("express");

router.post('/login',async (request,response)=>{
  const {username,password}=request.body
  try{
    await User.findOne({
      where:{
        username:username,
        password:password
      }
    }).then(data=>{
      request.session.username=username
      request.session.isLogin=true
      return response.json({data,code:200})
    }).catch(err=>{
      return response.status(500).json({err})
    })
  }catch (err){
    console.log(e)
    response.status(500).json({err})
  }
})

router.post('/register',async (request,response)=>{
  const {username,password}=request.body
  try{
    const {data}= await User.create({
      id:Date.now(),
      username,
      password
    })
    return response.json({data,code:200})
  }catch (err){
    return  response.json({err,code:500})
  }
})

router.post('/verify',(request,response)=>{
  const {username,isLogin}=request.session
  if(isLogin){
    response.status(200).json({username,isLogin,code:200})
  }else{
    response.status(200).json({username:null,isLogin:false,code:401})
  }
})

router.post('/logout',(request,response)=>{
  const {username}= request.session
  request.session.destroy(()=>{
    return response.json({code: 200, msg:'退出成功'})
  })
})

module.exports=router