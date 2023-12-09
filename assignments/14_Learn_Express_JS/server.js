const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // does exactly the same as line 5, but for json

app.set('view engine', 'ejs')

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000);