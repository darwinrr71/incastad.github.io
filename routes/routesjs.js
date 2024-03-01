/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date: 2024-01-06
* Design Name: index.js
*       Tools: Javascript, NodeJs, Express, Ejs
* 
* Description: 
* 		Open paths of static directories to use in EJS files.
*-----------------------------------------------------------*/
/** crea un enrutador */
const express = require("express")
const uploadController = require("../controller/uploadcontroller")
const routesjs = express.Router()
/** eniviar solicitud al servidor 
 *  crear un recurso del servidor
 *  Adicionar estado
*/


/***************************************************  
 * Calls the uploadcontroller to render the pages. *
 **************************************************/
routesjs.get("/menus/anstallda", uploadController.upload_Anstallda)
routesjs.get("/menus/butiksstadning", uploadController.upload_Butiksstadning)
routesjs.get("/menus/flyttstadning", uploadController.upload_Flyttstadning)
routesjs.get("/menus/flyttstadningforetag", uploadController.upload_Flyttstadningforetag)
routesjs.get("/menus/fonsterputsning", uploadController.upload_Fonsterputsning)
routesjs.get("/menus/fonsterputsningforetag", uploadController.upload_Fonsterputsningforetag)
routesjs.get("/menus/hemstadning", uploadController.upload_Hemstadning)
routesjs.get("/menus/kontaktaoss", uploadController.upload_Kontaktaoss)
routesjs.get("/menus/kontorsstadning", uploadController.upload_Kontorsstadning)
routesjs.get("/menus/omoss", uploadController.upload_Omoss)
routesjs.get("/menus/omosscont", uploadController.upload_Omosscont)
routesjs.get("/menus/priser", uploadController.upload_Priser)
routesjs.get("/menus/prisercont", uploadController.upload_Prisercont)
routesjs.get("/menus/priserflyttstadning", uploadController.upload_Priserflyttstadning)
routesjs.get("/menus/priserflyttstadningforetag", uploadController.upload_Priserflyttstadningforetag)
routesjs.get("/menus/priserfonsterputsning", uploadController.upload_Priserfonsterputsning)
routesjs.get("/menus/priserfonsterputsningforetag", uploadController.upload_Priserfonsterputsningforetag)
routesjs.get("/menus/priserkontorsstadning", uploadController.upload_Priserkontorsstadning)
routesjs.get("/menus/priserstorstadning", uploadController.upload_Priserstorstadning)
routesjs.get("/menus/prisertrappstadning", uploadController.upload_Prisertrappstadning)
routesjs.get("/menus/priservisningsstadning", uploadController.upload_Priservisningsstadning)
routesjs.get("/menus/referenser", uploadController.upload_Referenser)
routesjs.get("/menus/storstadning", uploadController.upload_Storstadning)
routesjs.get("/menus/trappstadning", uploadController.upload_Trappstadning)
routesjs.get("/menus/visningsstadning", uploadController.upload_Visningsstadning)

module.exports = routesjs