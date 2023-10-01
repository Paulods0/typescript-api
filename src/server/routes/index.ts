import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  console.log(req)
  return res.status(StatusCodes.OK).send({
    success: true,
    message: "Getting the data",
  })
})

router.post("/post", (req: Request, res: Response) => {
  console.log(req.query.test)

  return res.json({
    message: "Posting the data",
  })
})

export { router }
