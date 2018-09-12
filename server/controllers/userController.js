const userController = {
    index(req,res) {
        console.log("indexing")
        res.send('indexing')
    },
    create(req,res) {
        console.log("creting user")
        console.log(req.body)
        res.send('yang mai dai tum // userController:9')
    },
    update(req,res) {
        
    },
    delete(req,res) {

    }
}

module.exports = userController