const mongoose = require('mongoose');
const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// Post.findById('628f67ecf2d055c3171e00f0', (error,))

/* Post.find({ }, (error, post) =>{
    console.log(error, post)
}) */

/* Post.create({
    title: 'benim ikici posta',
    content:'post ikinci içerik'
}, (error, post) => {
    console.log(error, post)
})
 */