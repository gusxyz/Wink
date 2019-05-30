const express = require('express');
const volleyball = require('volleyball');
const db = require ('./db/connection')
//  App Initialization
const app = express();

// Database 
const urls = db.get('urls');

//  Middleware
app.use(volleyball);
app.use(express.json());

//  Routing
app.get('/api/v1/', (req,res) => {
    res.json({
        'message': 'The Wink ;) API is set for blast off! 🚀'
    })
});

app.get('/api/v1/url', (req,res) => {
    urls.find({}).then(urls => {
        res.json(posts);
    }) 
});

app.listen(3000, () => console.log('Wink is listening on port 3000!'));
