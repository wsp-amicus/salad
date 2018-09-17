const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

let port = process.env.PORT || 5000

// support parsing of application/json type post data
app.use(bodyParser.json())

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/test', (req, res) => res.send('You are now connected with backend !'))

// register route in app
app.use('/users', require('./routes/users'))

// use this in production only
if(process.env.NODE_ENV === 'production') {
    // // serve react app in production
    // app.use(express.static(`${__dirname}/../build`))
    
    // Handles any requests that don't match the ones above
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname + '/../build/index.html'))
    })

    // # certificate part HTTPS
    // Certificate
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/wsp.thitgorn.com/privkey.pem', 'utf8')
    const certificate = fs.readFileSync('/etc/letsencrypt/live/wsp.thitgorn.com/cert.pem', 'utf8')
    const ca = fs.readFileSync('/etc/letsencrypt/live/wsp.thitgorn.com/chain.pem', 'utf8')

    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    }
    
    const httpsServer = https.createServer(credentials, app)
    httpsServer.listen(5556, () => {
        console.log('HTTPS Server running on port 5556')
    })
}

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})
