const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/getArticleList', async (request, response) => {
  const {category} = request.query
  await Article.findAll({
    attributes: ['id', 'title'],
    where: {
      'category': category
    }
  }).then((data) => {
    return response.json({data,code:200})
  }).catch(err => {
    console.log(err)
    return response.json({code:500})
  })

})
module.exports = router