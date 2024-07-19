// const path = require("path");
// const express = require("express");
import express from 'express'
import posts from './routes/posts.js'
const app = express();

//middleware to submit forms // body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', posts)

app.listen(4000, () => {
  console.log("server running on 4000");
});

// app.post("/posts/:id", (req, res) => {
//   console.log(req.body);
//   res.send('wef')
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//to access html or other files without defined route
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.send("hello");
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });