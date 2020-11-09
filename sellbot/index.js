require('dotenv').config()

var express = require('express')
var app = express()
var port = process.env.PORT
var cors = require('cors')


app.use(cors())
app.use(express.json())


var poynt = require('poynt')({
    env: process.env.ENDPOINT,
    applicationId: process.env.APP_ID,
    filename: __dirname + '/' + process.env.KEYPAIR,
});

app.get('/', (req, res) => {
    res.send("<h2>You shouldn't be here</h2>")
})

app.get('/poynt', (req, res) => {
    var businessId = req.query.businessId
    //console.log(businessId)
    poynt.getBusiness({
        businessId: businessId
        //businessId: 'c446c47c-b993-48ab-afcb-b03e11183a2b'
    }, function (err, business) {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(business)
            res.json(business);
        }
    });
})

app.post('/poynt_webook', (req, res) => {
    var data = req.body
    var businessId =data.businessId
    //console.log(businessId)
    poynt.getBusiness({
        businessId: businessId
        //businessId: 'c446c47c-b993-48ab-afcb-b03e11183a2b'
    }, function (err, business) {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(business)
            sendSF(business)
            res.json(business);
        }
    });
})

function sendSF(business){
    console.log('SENDING TO SALES FORCE',business)
}

app.listen(port, () => {
    console.log(`Poynt listening at http://local.poynt.com:${port}`)
})