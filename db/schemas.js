// Import the mongoose module
import { Schema, model, models } from "mongoose";

// SCHEMAS
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: String,
}, { timestamps: true })

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        required: true,
        default: false
    },
    todoBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const User = models.User || model('User', userSchema);
const Todo = models.Todo || model('Todo', todoSchema);

module.exports = {
    User, Todo
}