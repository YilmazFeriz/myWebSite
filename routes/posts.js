const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const Post = require('../models/Post')
const path = require('path')


router.get('/addkitap', (req, res) => {
    if(req.session.userId){
        return res.render('site/addkitap')
    }
    
    res.redirect('/users/login')
})
router.get('/:id', (req, res) => {
    Post.findById(req.params.id).lean().then(post =>{
        res.render('site/post', {post:post})
    })
})

router.post('/test', (req, res) => {

    let kitapresmi = req.files.kitapresmi
    
    kitapresmi.mv(path.resolve(__dirname, '../public/resimler', kitapresmi.name))

    Post.create({
        ...req.body,
        kitapresmi:`/resimler/${kitapresmi.name}`
    })
    res.redirect('/')
})

module.exports = router
