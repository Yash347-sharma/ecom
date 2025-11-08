const express = require("express");
const router = express.Router();

const MailController = require("../controllers/ContactMail");


router.post("/", MailController.sendContactMail);
module.exports = router;