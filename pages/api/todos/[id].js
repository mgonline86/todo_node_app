// TODO MAIN ROUTE

export default function todoHandler(req, res) {
    try {
        
        const { id: reqID } = req.query;
        console.log(reqID);
        
        switch (req.method.toLowerCase()) {
            case "get":
                const todos = [
                    {
                        id: "1",
                        text: "Todo 01",
                        isDone: true,
                        userID: "1",
                    },
                    {
                        id: "2",
                        text: "Todo 02",
                        isDone: false,
                        userID: "2",
                    },
                    {
                        id: "3",
                        text: "Todo 03",
                        isDone: false,
                        userID: "1",
                    },
                ]
                const todo = todos.find(({ id }) => id === reqID);
                return res.status(200).json(todo)
                
            case "put":
                let payload = req.body;
                console.log(payload);
                const updatedTodo = {
                    text: "Updated Todo",
                    isDone: false,
                    userID: "2",
                }
                return res.status(200).json(updatedTodo)

            case "delete":
                const deletedTodo = {
                    id: "0",
                    text: "Deleted Todo",
                    isDone: false,
                    userID: "2",
                }
                return res.status(200).json(deletedTodo)
        
            default:
                return res.status(403).json({ message: 'Method Not Allowed!' })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error!' })
    }
  }
  