'use strict'

const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api/checkuser', (req, res, next) => {
    return res.json({
        message: "Xin chao cac ban!"
    })
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        stack: error.stack,
        message: error.message || 'Internal Server Error!'
    })
})

module.exports = app