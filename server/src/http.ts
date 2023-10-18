import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://master--luminous-cajeta-a0731b.netlify.app/')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
	allowEIO3: true,
	cors: {
		origin: ["https://master--luminous-cajeta-a0731b.netlify.app/"],
		credentials: true,
	},
})

export { serverHttp, io, app }
