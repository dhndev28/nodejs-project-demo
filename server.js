'use strict'

require('dotenv').config()
const app = require('./src/app')

const env = process.env
const PORT = (env.NODE_ENV === 'dev' ? env.APP_DEV_PORT : env.APP_PRO_PORT) || 3000

app.listen(PORT, () => {
    console.log(`Run app with port: ${PORT}`)
})