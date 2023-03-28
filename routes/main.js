const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    console.log(req.session)
    Post.find({}).lean().then(posts => {
        res.render('site/index',{posts:posts})
    })
})
router.get('/index', (req, res) => {
    Post.find({}).lean().then(posts => {
        res.render('site/index',{posts:posts})
    })
})
router.get('/kitap', (req, res) => {
    Post.find({}).lean().then(posts => {
        res.render('site/kitap',{posts:posts})
    })
})
router.get('/trend', (req, res) => {
    Post.find({}).lean().then(posts => {
        res.render('site/trend',{posts:posts})
    })
})
router.get('/iletisim', (req, res) => {
    res.render('site/iletisim')
})


module.exports = router
