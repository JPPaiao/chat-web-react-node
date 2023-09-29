import { app, serverHttp } from "./http"
import "./websocket"

serverHttp.listen(3000, () => console.log("Server run http://localhost:3000"))
