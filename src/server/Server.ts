import { Request, Response } from "express"
import Express from "express"
import { router } from "./routes/index"
import dotenv from "dotenv"

dotenv.config()
const server = Express()

server.use(Express.json())
server.use(router)

server.listen(process.env.PORT || 3333, () => {
  console.log("App rodando")
})
