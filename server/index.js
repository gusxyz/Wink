const app = require('express')();
const volleyball = require('volleyball');

app.use(volleyball);


app.get('/', (req,res) => {
    res.json({
        'message': 'The Wink ;) API is set for blast off! 🚀'
    })
});

app.listen(3000, () => console.log('Wink is listening on port 3000!'));
