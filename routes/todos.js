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
    console.log(req.body)
    // res.json({sucess:true})
    const { userId, title, content } = req.body
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
            todos: {
            createMany: {
              data: [{
                title,
                content,
            }],
            },
          },
        },
      })
    res.status(201).json(user)
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