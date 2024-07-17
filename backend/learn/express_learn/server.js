const express = require("express");
const path = require("path");
const app = express();

let posts = [
  {
    id: 1,
    name: "arun",
  },
  {
    id: 2,
    name: "ram",
  },
  {
    id: 3,
    name: "siva",
  },
];
// app.get("/", (req, res) => {
//   res.send("hello");
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.get("/posts", (req, res) => {
  res.json(posts); // to send json data
});

app.get("/posts/:id", (req, res) => {
  res.json(posts.filter((e) => e.id == parseInt(req.params.id))); // to send json data
});

app.post("/posts/:id", (req, res) => {
    // posts.push(req)
    console.log(req.body);
    res.send('wef')
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//to access html or other files without defined route
app.use(express.static(path.join(__dirname, "public")));

app.listen(4000, () => {
  console.log("server running on 4000");
});
