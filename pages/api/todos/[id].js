// TODO MAIN ROUTE
import connectMongo from "../../../db/client";
import { User, Todo } from "../../../db/schemas";

export default async function todoHandler(req, res) {
    try {
        // Connecting to Database
        await connectMongo();

        const { id: todoID } = req.query;
        
        switch (req.method.toLowerCase()) {
            case "get":
                let todo = await Todo.findById(todoID);
    
                return res.setHeader('Content-Type', 'application/json').status(200).json(todo)            
                
            case "put":
                const payload = JSON.parse(req.body);
                let datatToUpdate = {}
                if (Object.keys(payload).includes("title")) {
                    datatToUpdate.title = payload.title;
                }
                if (Object.keys(payload).includes("isDone")) {
                    datatToUpdate.isDone = payload.isDone;
                }
                const updatedTodo = await Todo.findByIdAndUpdate(todoID, datatToUpdate)

                return res.setHeader('Content-Type', 'application/json').status(200).json(updatedTodo) 

            case "delete":
                let deletedTodo = await Todo.findOneAndDelete(todoID);
    
                return res.setHeader('Content-Type', 'application/json').status(200).json(deletedTodo)
        
            default:
                return res.status(403).json({ message: 'Method Not Allowed!' })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error!' })
    }
  }
  