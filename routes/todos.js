const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

// Get all to do for specific user
router
.get('/', async(req, res) => {
    const todos = await prisma.todo.findMany();
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({todos})
})
// Add new to do for specific user
.post('/', async(req, res) => {
    const { userId, title, content } = req.body
    console.log(req.body)
    const todo = await prisma.todo.create({
        data: {
            title,
            content,
            author: userId,
        },
    })
    res.status(201).json(todo)
})

// Get to do information for specific user
router.get('/:id', async(req, res) => {
    const { id } = req.params
    const todo = await prisma.todo.findUnique({
        where: {
          id,
        },
    })
    res.status(200).json({ todo })
})
// Update an existing to do for specific user
.put('/:id', async(req, res) => {
    const { id } = req.params
    const todo = await prisma.todo.update({
        where: {
            id,
        },
        data: req.body,
      })
      res.status(200).json({ todo })
    })
    // Delete an existing to do for specific user
    .delete('/:id', async(req, res) => {
        const { id } = req.params
        const todo = await prisma.todo.delete({
            where: {
              id,
            },
        })
    res.status(200).json({ todo })
})

module.exports = router