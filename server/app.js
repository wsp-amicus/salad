const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()

let port = process.env.PORT || 5000

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => res.send('You are now connected with backend !'))

// register route in app
app.use('/users', require('./routes/users'))

// use this in production only
if(process.env.NODE_ENV === 'production') {
    // serve react app in production
    app.use(express.static(`${__dirname}/../build`))

    // certificate
    app.get('/.well-known/acme-challenge/5TiT4Mxfc9atVdR6YsVF28fIx1DvwaJJkdesn81_1d8', (req,res) => {
        res.send('5TiT4Mxfc9atVdR6YsVF28fIx1DvwaJJkdesn81_1d8.Uu7iEQCQf9geWmNlvr7t9ugz1CbwmFs6JNiD4LSq_lE')
    })

    // Handles any requests that don't match the ones above
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname + '/../build/index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
