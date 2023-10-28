const Todo=require('../models/todoModel'); //import db model

//function to add tasks
function todoAdd(req,res)
{
    const i=req.body.x;
    const task = new Todo(
        {
            todo: i,
        }
    );
    task.save()
    .then(()=>res.redirect("/index"));
};

//function to read and show tasks
async function todoRead(req,res)
{
    const list= await Todo.find();
    res.render("index", { title: "To Do App", todos: list });
}

//function to delete tasks
function todoDelete(req,res)
{
    const todoToDel=req.body.n;
    Todo.findOneAndDelete({todo: todoToDel})
    .then(()=>res.redirect("/index"));
}

//function to update tasks
function todoUpdate(req,res)
{
    const todoToUpd=req.body.a;
    const todoUpdated=req.body.b;
    const doc=Todo.findOneAndUpdate({todo: todoToUpd},{todo: todoUpdated})
    .then(()=>res.redirect("/index"));
}

module.exports={todoAdd,todoRead,todoDelete,todoUpdate}; //exported functions