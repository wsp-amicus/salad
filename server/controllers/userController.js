const userController = {
    index(req,res) {
        console.log("indexing")
        res.send('indexing')
    },
    create(req,res) {
        console.log("creting user")
        res.send('200 OK')
    },
    update(req,res) {

    },
    delete(req,res) {

    }
}

module.exports = userController