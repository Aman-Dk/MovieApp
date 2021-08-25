const express = require('express')
const movie = require('../models/movies');
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('index')
})

router.post('/',async(req,res)=>{
    try{
        await movie.create(req.body.movies);
        res.redirect('/');
    }
    catch(e){
        console.log(e.message);
        res.redirect('/');
    }
})

router.get('/movieList',async(req,res)=>{
    try{
        const Movies = await movie.find({});
        res.render('movieList',{Movies});
    }
    catch(e){
        log(e.message);
        res.redirect('/');
    }
})


module.exports = router