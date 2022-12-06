const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

// Get all to do for specific user
router
.get('/', (req, res) => {
    res.status(200).json({ todos: ["all todos"] })
})
// Add new to do for specific user
.post('/', async(req, res) => {
    // const { userId, title, content } = req.body
    console.log(req.body)
    // const todo = await prisma.todo.create({
    //     data: {
    //         title,
    //         content,
    //         author: userId,
    //     },
    // })
    res.status(201).json(req.body)
})

// Get to do information for specific user
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.status(200).json({ id })
})
// Update an existing to do for specific user
.put('/:id', (req, res) => {
    const { id } = req.params
    res.status(200).json({ id })
})
// Delete an existing to do for specific user
.delete('/:id', (req, res) => {
    const { id } = req.params
    res.status(200).json({ id })
})

module.exports = router