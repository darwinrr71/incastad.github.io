/**---------------------------------------------------------
* Company: INCA DEVELOPMENT AB
* Developer Full Stack: Darwin Rengifo
* 
* Create Date : 2024-01-15
*     Program : Upload Controller
*   Path Name : controller/uploadcontroller.js
*       Tools : Javascript, NodeJs, Express, Ejs 
* 
* Description: 
* Render pages to the browser.
*
* Err: HTTP Status Codes
* 200: GET  OK
---------------------------------------------------------**/

class UploadController {
    /** uploadStates: retrieves all rows from the states table */
    async upload_Anstallda(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/anstallda")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Butiksstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/butiksstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Flyttstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/flyttstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Flyttstadningforetag(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/flyttstadningforetag")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Fonsterputsning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/fonsterputsning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Fonsterputsningforetag(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/fonsterputsningforetag")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Hemstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/hemstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Kontaktaoss(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/kontaktaoss")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Kontorsstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/kontorsstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Omoss(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/omoss")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Omosscont(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/omosscont")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priser(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priser")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Prisercont(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/prisercont")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priserflyttstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priserflyttstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priserflyttstadningforetag(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priserflyttstadningforetag")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priserfonsterputsning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priserfonsterputsning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priserfonsterputsningforetag(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priserfonsterputsningforetag")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priserkontorsstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priserkontorsstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priserstorstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priserstorstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Prisertrappstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/prisertrappstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Priservisningsstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/priservisningsstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Referenser(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/referenser")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Storstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/storstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Trappstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/trappstadning")
        } catch (err) {
            console.error(err)
        }
    }
    async upload_Visningsstadning(req, res) {
        try {
            res.status(200) // Status 'Ok'
            res.render("menus/visningsstadning")
        } catch (err) {
            console.error(err)
        }
    }
    
}

module.exports = new UploadController()
