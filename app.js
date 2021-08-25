if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const app = express();


// Routes
const movieRoute = require('./routes/moviePath')

// database connection
// 'mongodb://localhost:27017/moviesList'
mongoose.connect(process.env.DB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Database Connected');
    })
    .catch(err =>{
        console.log('error occured',err);
});

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/views' ));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended:true}));

app.use(movieRoute)



app.listen(3000, ()=>{
    console.log('app running at port 3000')
})