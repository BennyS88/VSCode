// asking node.js to import file called "express"
const express = require("express");

let app = express();
// to inform app that the request that you get in body will be in json format (especially in postman)
app.use(express.json());

let router = express.Router();

router.get("/",(request,response)=>{
    response.status(200).send("Hello World!");
});

//you can map various APIs under 1 code..
router.get("/special", (req,res)=>{
    res.status(200).send("He110 w0rld~!");
});

router.post("/input", (request,response)=>{
    response.status(200).send(`First Name: ${request.body.first_name} | Last name: ${request.body.last_name}`
    );
});

router.get("/name", (req,res)=>{
    res.status(200).send(`Hello, ${req.query.name}`);
});

app.use(router);

app.listen(5000, (errors) =>{
    if (errors) {
        console.log(errors);
    } else {
        console.log("Server running at port 5000.");
    }
});


