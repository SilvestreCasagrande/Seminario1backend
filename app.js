const express = require("express")
const app = express()
const port = process.env.PROT || 8080
const morgan = require("morgan")
const mongoclient = require('mongodb').MongoClient;
const usuarioRoutes = require("./routes/usuario")
const dotenv = require("dotenv")
dotenv.config();

//conectarse a Mongo
mongoclient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("SUCESS: conectado a la database de Mongo"))
.catch((err) => console.log(`ERROR: al conectarse a la database de Mongo: \n  ====> ${err.message}`))

//middleware
app.use(morgan("dev"))
app.use("/", usuarioRoutes)

app.listen(port,() => {console.log(`server prendido en el puerto ${port}`)})



const uri = "mongodb+srv://flyteamadmin:<password>@cluster0.bgrzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
