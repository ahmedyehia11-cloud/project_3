import express from 'express'
import { connectDB } from './DB/DB_connection.js'
import dotenv from 'dotenv'
import userRouter from './src/modules/userModule/user.router.js'
import noteRouter from './src/modules/notesModule/notes.router.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use('/users', userRouter)
app.use('/notes', noteRouter)
connectDB()

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}✔️`)
})