import type {RequestHandler} from 'express'

export const handler: RequestHandler = (req, response, next) => {
    console.log(req.url)
    response.json({})
    next()
}
