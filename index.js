/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date: 2021-10-01
*     Program : Incasale Index
*   Path Name : incasale-support/index.js
*       Tools : Javascript, NodeJs, Express, Ejs, Knex 
* 
* Description: 
* - create express server.
* - Cross-Origin Resource Sharing(CORS).
*   Allows requests from domain-B to domain-A
*   if domain-B is not configured, you will get a
*   error for violation of CORS policy
* - process.env.PORT || 4000.
*   When the project is uploaded to the server, 
*   the server looks for an available port, if it
*   does not find one, it assigns port 4000
*-----------------------------------------------------------*/

const express = require("express")
const router = require("./routes/index")
const routesjs = require("./routes/routesjs")
const port = process.env.PORT || 3000

const app = express()

app.set("view engine", "ejs")
app.set("views", __dirname + "/views/pages")

//define public folder
app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded( {extended:false} ))
app.use(express.json())
app.use(router)        //This router is for the backend side
app.use(routesjs)

//error page - render the page to 404.ejs
app.use((req, res) =>{
    res.status(404).render("404")
})

app.listen(port, () => 
    console.log(`The server is running on port:${port}`)
)