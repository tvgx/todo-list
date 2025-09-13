const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const TodoModel = require('../models/todo');


const app =express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get', )

app.post('/add', (req,res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update:id', (req,res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log('server is running');
})