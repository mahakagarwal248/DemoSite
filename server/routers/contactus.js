const router = require("express").Router();
const sendingmail = require("../controllers/sendingmail");

router.post("/mail", sendingmail);

module.exports = router;
