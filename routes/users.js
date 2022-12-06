const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

// Get all Users
router
.get('/', async(req, res) => {
    const users = await prisma.user.findMany();
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({users})
})

module.exports = router