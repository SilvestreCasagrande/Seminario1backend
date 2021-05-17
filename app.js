const express = require("express")
const app = express()
const port = 3000
const morgan = require("morgan")
const usuarioRoutes = require("./routes/usuario")

//middleware
app.use(morgan("dev"))
app.use("/", usuarioRoutes)

app.listen(port,() => {console.log(`server prendido en el puerto ${port}`)})
