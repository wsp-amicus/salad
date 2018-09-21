const Dashboard = require('../models/dashboard')

const dashboardController = {
    index(req,res) {
        Dashboard.findOne({}, (err,dashboard) => {
            if(err) throw err
            if(!dashboard) {
                const header = 'Welcome to amicus salad'
                const body = 'This is admin panel for amicus salad'
                let newDashboard = new Dashboard({
                    header,
                    body
                })

                newDashboard.save()
                res.status(200).send(newDashboard)
                return
            }

            res.status(200).send(dashboard)
        })
    },
    update(req,res) {
        Dashboard.findOne({}, (err,dashboard) => {
            if(err) throw err
            if(!dashboard) {
                res.status(500).send('there might me an error')
            }
            dashboard.header = req.body.header
            dashboard.body = req.body.body
            dashboard.save()
            res.status(200).send('updated')
        })
    }
}

module.exports = { dashboardController }