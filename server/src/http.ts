import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
	allowEIO3: true,
	cors: {
		origin: "https://master--luminous-cajeta-a0731b.netlify.app/",
		credentials: true,
		methods: "GET, POST",
	},
})

io.engine.on("initial_headers", (headers, req) => {
	headers["Access-Control-Allow-Origin"] = "https://master--luminous-cajeta-a0731b.netlify.app/"
});

io.engine.on("headers", (headers, req) => {
	headers["Access-Control-Allow-Origin"] = "https://master--luminous-cajeta-a0731b.netlify.app/"
});

export { serverHttp, io, app }
