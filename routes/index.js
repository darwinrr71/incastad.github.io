/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date: 2021-10-01
* Design Name: index.js
*       Tools: Javascript, NodeJs, Express, Ejs, Knex 
* 
* Description: 
* 		Open paths of static directories to use in EJS files.
*-----------------------------------------------------------*/
/** crea un enrutador */
const express = require("express")
const router = express.Router()
/** eniviar solicitud al servidor 
 *  crear un recurso del servidor
 *  Adicionar estado
*/
router.get("/", (req, res) => {
    res.render("index")
})

module.exports = router