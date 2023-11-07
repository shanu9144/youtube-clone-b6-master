const express = require('express');
const mongoose = require('mongoose')

const videoRouter = require('./routes/videoRouter')
const authRouter = require('./routes/authRouter.js')
const app = express();
app.use(express.json());

// const DBURL = "mongodb://127.0.0.1:27017/youtubeclone"
const DBURL = "mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/youtubeclone_17112002"

mongoose.connect(DBURL)
.then(() => {console.log("Database connected", DBURL)})
.catch((error) => {console.log("Cannot connect DB ", error)})

app.get('/', function(req, res){
    return res.send("Hello Server!")
})
// app.get('/', (req, res) => {
//     return res.send("Hello Server!")
// })

// additional routers
app.use(videoRouter)
app.use(authRouter)

app.listen(5500, function(){
    console.log("App server running on 5500")
})