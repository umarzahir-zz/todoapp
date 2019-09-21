const Router = require('express').Router()
const todoSchema = require('./todoSchema')


//new todo api
Router.post("/newtodo", (req, res) => {
    const newtodo = new todoSchema({
        todo: req.body.todo
    })
    newtodo.save()
    .then((doc) => res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

Router.put("/newlist",(req, res)=>{
    const newList =({
        title : req.body.title,
        isMarked: req.body.isMarked,
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
    todoSchema.findOneAndUpdate({'list.title': req.body.title},{
        $pull: { list: {title: req.body.title} },
       
    }, {new: true})
    .then((doc)=> res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

Router.delete("/deletelist", (req, res)=> {
    todoSchema.deleteOne({_id: req.body.id, })
    .then((doc)=> res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

Router.put("/updatetodo",(req, res)=> {
    todoSchema.updateOne({_id: req.body.id} ,
        {todo: req.body.updatetodo})
        .then((doc)=> res.status(200).json(doc))
        .catch((err)=> res.status(400).json(err))
})

Router.get("/alltodos", (req,res)=> {
    todoSchema.find({})
    .then((doc)=> res.status(200).json(doc))
    .catch((err)=> res.status(400).json(err))
})

module.exports = Router