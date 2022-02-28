const { response } = require("express");
// import the express package
const express = require("express");
// note, don't include the .js portion

/*
const database = require("./data");
*/

// import the mysql database connection
const database = require("./database");

app = express();
app.use(express.json());

router = express.Router();

// All the APIs here

/*

router.get("/users/all", (request, response) => {
    database.connection.query ("select * from users", (errors, records) => {
        if (errors){
            console.log(errors);
            response.status(500).send("Something wrong happened in the Server")
        } else {
            response.status(200).send(records);
        }
    });
});

*/

// GET API to get all users
router.get("/users/all", (request, response) =>{
    let users = database.get_all_users();
    response.status(200).send(users);
});

// GET API to get user corresponding to user_id passed in the request.query
router.get("/users/id", (request, response) =>{
    let users = database.get_user_by_user_id(request.query.id);
    response.status(200).send(users)
});

// POST API to add user
router.post("/users/add", (request,response) => {
    let user = request.body;
    database.add_user(user);
    response.status(200).send("User added successfully!");
});

/*
router.post("/users/add", (request, response) => {
    database.connection.query(
      `insert into 
        users(user_name, user_email, user_dob) 
      values 
        ("${request.body.name}", "${request.body.email}", "${request.body.dob}")`,
      (errors, records) => {
        if (errors) {
          console.log(errors);
          response.status(500).send("Something wrong happened in the Server");
        } else {
          response.status(200).send("User added!");
        }
      }
    );
  });

*/

/* 
router.delete("/users/delete", (request, response) => {
    database.connection.query(
      `delete from users
      where
        user_id = "${request.query.userid}"`, //query from body
      (errors, records) => {
        if (errors) {
          console.log(errors);
          response.status(500).send("Something wrong happened in the Server");
        } else {
          response.status(200).send("User deleted!");
        }
      }
    );
  });
*/ 
 
app.use(router);

app.listen(4000, (errors)=>{
    if(errors) {
        console.log(errors);
    } else {
        console.log("Server Running at port 4000")
    }
});