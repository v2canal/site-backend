const express = require('express')
const cors = require('cors')
const app=express()
const session = require('express-session')
const publishRoute=require('./routes-back/publish')
const getAllArticleRoute = require('./routes-front/getAllArticle')

const getArticleListRoute=require('./routes-front/getArticleList')
const getArticleByIdRoute=require('./routes-front/getArticleById')
const userRoute=require('./routes-front/user')
app.use(cors({
  origin:['http://localhost:3000','http://localhost:8080',],
  credentials: true
}))
app.use(express.urlencoded({ extended: false })); // 接收post请求数据
app.use(express.json());

app.use(session({
  name:'happy',
  secret: 'express-session',
  httpOnly: true,
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
  maxAge:60*1000*24
}))
app.use("*", async (req, resp, next) => {
  next()
})

//用户相关路由
app.use('/',userRoute)
//文章相关路由
app.use('/',publishRoute)
app.use('/',getAllArticleRoute)
app.use('/',getArticleListRoute)
app.use('/',getArticleByIdRoute)


app.listen(9000,()=>{
})
