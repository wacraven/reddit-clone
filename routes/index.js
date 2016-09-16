'use strict';

const { Router } = require('express');
const router = Router();
// const { db } = require('../database');
const Post = require('../models/post');


router.get('/', (req, res, err) => {
	Post
		.find()//.sort({score: -1})
		.then((posts) => res.render('index', {page: 'Home', posts}))
		.catch(err)
	// res.render('index')
})

router.get('/post', (req, res) => {
	res.render('post', {page: 'Post'})
})


router.post('/post', (req, res, err) =>
	Post
		.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err)
)


module.exports = router;
