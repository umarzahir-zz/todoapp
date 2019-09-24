const Router = require('express').Router()
const todoSchema = require('./todoSchema')
const uniqid = require('uniqid');


//new todo api
Router.post("/newtodo", (req, res) => {
    console.log("post todo:::", req.body.todo)
    const newtodo = new todoSchema({
        todo: req.body.todo
    })
    newtodo.save()
    .then((doc) => res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

Router.put("/newlist",(req, res)=>{
    const newList =({
        _id: uniqid(),
        title : req.body.title,
        isMarked: req.body.isMarked,
        dueDate: req.body.dD
    })
    todoSchema.updateOne({_id: req.body.id }, {
        $push: {"list": newList}
    }).then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json(500))
})

//new list in todo
Router.put("/updatelist",(req,res)=> {
    const list = {title: req.body.title, marked: req.body.isMarked, dueDate: req.body.duedate };
    todoSchema.updateOne({_id: req.body.id}, 
        {$push: { list: list}})
        .then((doc)=> res.status(200).json(doc))
        .catch((err)=> res.status(400).json(err))
})

Router.delete("/deletelist", (req, res)=> {
    console.log(req.body.id)
    todoSchema.findOneAndUpdate({ 'list._id': req.body.id},{
        $pull: { list: {_id: req.body.id} },
       
    }, {new: true})
    .then((doc)=> res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

Router.delete("/deletetodo", (req, res)=> {
    console.log("id:::",req.body.id)
    todoSchema.deleteOne({_id: req.body.id, })
    .then((doc)=> res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

Router.put("/updatetodo",(req, res)=> {
    console.log("update todo", req.body)
    todoSchema.updateOne({_id: req.body.id} ,
        {todo: req.body.utodo})
        .then((doc)=> res.status(200).json(doc))
        .catch((err)=> res.status(400).json(err))
})

Router.get("/alltodos", (req,res)=> {
    todoSchema.find({})
    .then((doc)=> res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

module.exports = Router