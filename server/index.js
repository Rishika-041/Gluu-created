const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
app.get('/user', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(5000, () => {
  console.log("server has started on port 5000");
});