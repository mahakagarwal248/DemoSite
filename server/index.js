const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
const port = process.env.PORT;
app.use(express.json()); //this middleware used to get req.body

app.get("/", (req, res) => {
  res.send("Hello bhomik!");
});
app.use("/contactus", require("./routers/contactus"));

app.listen(port, () => {
  console.log(`server in runing :${port}`);
});
