import connectMongo from "../../../db/client";
import { User, Todo } from "../../../db/schemas";

// TODOS MAIN ROUTE

export default async function todoHandler(req, res) {
    try {
        // Connecting to Database
        await connectMongo();
        
        switch (req.method.toLowerCase()) {
            case "get":
                const todos = await Todo.find();
                return res.status(200).json({ todos })
                
            case "post":
                let payload = req.body;
                console.log(payload)
                const newTodo = await Todo.create(payload)
                return res.status(201).json(newTodo)
        
            default:
                return res.status(403).json({ message: 'Method Not Allowed!' })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error!' })
    }
  }
  