const express = require('express')
const bodyParser = require('body-parser');
const app = express()

let port = process.env.PORT || 5000

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => res.send('Hello World!'))

// register route in app
app.use('/users', require('./routes/users'))

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
