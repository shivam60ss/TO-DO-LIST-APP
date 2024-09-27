const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const TodoModel = require('./Models/Todo')

mongoose.connect('mongodb://localhost:27017/demo')
app.use(express.json())

app.use(cors());
app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task:task,
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})