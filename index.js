//this is the mongodb code
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sample")
.then(() => {
    console.log("Connected to MongoDB Successfully");
})
.catch((error) => {
    console.log(error);
});

const student = new mongoose.Schema({
    name: String,   // name:{type:"String", require:"true"}
    workout: Boolean,
    height: Number
});

//Model is like a collection, so made a collection Student here
const Student = new mongoose.model("Student", student);   

const adder = async () => {

    // const ss= await Student.find(); //give all the objects

    // const ss= await Student.find({height: {$eq: 6}});  //find particular object

    const ss= await Student.find({height: {$in: [5,6]}});  //any object who have this value in the array

    console.log(ss);

    //another way to insert value
    // const ss = await Student.create({
    //     name: "Chinki",
    //     workout: true,
    //     height: 6
    // });

    //basic way to insert value
    // const ss = new Student({
    //     name: "Sid",
    //     workout: false,
    //     height: 5
    // });
    
    // //wait for this line to completed then proceed to another
    // //save it in the database
    // await ss.save();
};

adder();



//This is the express code 
// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const router = require("./userRoutes");

// const app = express();
// const port = 4000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use("/api/v1", router);

// //we are making an Api here
// app.get("/", (req, res) => {    
//     res.sendFile(path.join(__dirname + "/index.html"));
//     // res.json({
//     //     name: "Sid",
//     //     email: "sample@gmail.com",
//     //     password: "hexed"
//     // })
// });

 
// // app.get("/", (req, res) => {
// //     console.log(path.join(__dirname + "/index.html"));
// //     res.sendFile(path.join(__dirname + "/index.html"));
// // });

// // app.post("/api/v1/register", (req, res) => {
// //     res.send(`<h1>DONE  Mr ${req.body.name} </h1> 
// //               <h2>You Email is ${req.body.email} </h2> 
// //               <h3> Your Password is ${req.body.password} </h3>`);
// //     console.log(req.body);
// // });

// //we are making server here
// app.listen(port, () => {
//     console.log(`Server is working on port: ${port}`);
// });