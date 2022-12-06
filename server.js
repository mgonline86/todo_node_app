// Setup Server
const express = require('express')
// Setup Database
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT || 5000

// Routes Import
const todos = require('./routes/todos')
const users = require('./routes/users')

// Routes Using
app.use('/todos', todos)
app.use('/users', users)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})