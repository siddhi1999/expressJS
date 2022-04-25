const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./userRoutes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router);

//we are making an Api here
app.get("/", (req, res) => {    
    res.sendFile(path.join(__dirname + "/index.html"));
    // res.json({
    //     name: "Sid",
    //     email: "sample@gmail.com",
    //     password: "hexed"
    // })
});

 
// app.get("/", (req, res) => {
//     console.log(path.join(__dirname + "/index.html"));
//     res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.post("/api/v1/register", (req, res) => {
//     res.send(`<h1>DONE  Mr ${req.body.name} </h1> 
//               <h2>You Email is ${req.body.email} </h2> 
//               <h3> Your Password is ${req.body.password} </h3>`);
//     console.log(req.body);
// });

//we are making server here
app.listen(port, () => {
    console.log(`Server is working on port: ${port}`);
});