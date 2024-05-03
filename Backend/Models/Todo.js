const todoModel = require("../Schemas/todoSchema");
const Todo = class {
    todoId;
    title;
    description;
    username;
    completed;
    createdAt;
    myTodoDoc;

    constructor({ title, description, username }) {
        // this.todoId = todoId;
        this.title = title;
        this.description = description;
        this.username = username;
        // this.completed = completed;
        // this.createdAt = createdAt;
    }

    createTodo(){
        return new Promise(async (resolve, reject) => {
            try{
                const todoObj = new todoModel({
                    title: this.title,
                    description: this.description,
                    username: this.username
                })

                const todoDoc = await todoObj.save();
                resolve(todoDoc);

            }  catch (err){
                // reject as database error
                reject({
                    status: 500,
                    message: `Internal server error. ${err}`,
                });
            }
        })
    }

    static markAsCompleted({todoId, comp}){
        return new Promise(async (resolve, reject) => {
            try{
                const todoDoc = await todoModel.findOneAndUpdate(
                    {_id: todoId},
                    {$set: {completed: !comp}},
                    {new: true}
                )
                if(!todoDoc) reject({
                    status: 404,
                    message: "Todo not found",
                })
                resolve(todoDoc);
            } catch(err){
                reject({
                    status: 500,
                    message: `Internal server error. ${err}`,
                });
            }
        })
    }

    static deleteTodo({todoId}){
        return new Promise(async (resolve, reject) => {
            try{
                const todoDoc = await todoModel.findOneAndDelete({_id: todoId})
                if(!todoDoc) reject({
                    status: 404,
                    message: "Todo not found",
                })
                resolve(todoDoc);
            } catch(err){
                reject({
                    status: 500,
                    message: `Internal server error. ${err}`,
                });
            }
        })
    }


    static fetchTodos({username}){
        return new Promise(async (resolve, reject) => {
            try{
                // TODO: Step1> find all todos matching username.
                const todosList = await todoModel.find({username})
                resolve(todosList);
            } catch(err){
                reject({
                    status: 500,
                    message: `Internal server error. ${err}`,
                });
            }
        })
    }

    static updateTodo({todoId, title, description}){
        return new Promise(async (resolve, reject) => {
            try{
                const todoDoc = await todoModel.findOneAndUpdate(
                    {_id: todoId},
                    {$set: {title, description}},
                    {new: true}
                )
                if(!todoDoc) reject({
                    status: 404,
                    message: "Todo not found",
                })
                resolve(todoDoc);
            } catch(err){
                reject({
                    status: 500,
                    message: `Internal server error. ${err}`,
                });
            }
        })
    }

};

module.exports = Todo;
