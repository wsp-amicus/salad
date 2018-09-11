const express = require('express')
const app = express()

let port = process.env.PORT || 5000

app.get('/test', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
