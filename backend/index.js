const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const interviewRoutes = require('./routes/interviewRoutes')
const participantRoutes = require('./routes/participantRouter')
const CustomError = require('./customError')

const dburl = 'mongodb+srv://mongo:mongo@cluster0.e50uq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dburl);
mongoose.connection.on('error', err => {console.log(err)});
mongoose.connection.once('open', () => {
    console.log('Database Connected');
})

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/v1/interview', interviewRoutes)
app.use('/api/v1/participant', participantRoutes)
app.use('*', (req,res,next)=> {
    next(new CustomError('Invalid Request Error', 404))
})
app.use((err, req, res, next)=> {
    console.log(err);
    if(!err.msg){
        err.msg = "Server Error"
    }
    if(!err.status){
        err.status = 404;
    }
    res.status(err.status).json({msg : err.msg});
})

const port = 8080;


app.listen(port, ()=> {console.log(`Listening on port ${port}`)});





