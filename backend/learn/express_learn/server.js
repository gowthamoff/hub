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

app.get("/posts", (req, res) => {
  const limit = parseInt(req.query.limit)
  if (!isNaN(limit) && limit > 0) {
    const data = posts.slice(0, limit)
    res.json(data ? data : {})
  }
  else {
    res.json(posts);
  }
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const post = posts.find(post => post.id == id)

  if (post) {
    res.status(200).json(post)
  } else {
    res.status(400).json({})
  }
});

// app.post("/posts/:id", (req, res) => {
//   console.log(req.body);
//   res.send('wef')
// });

app.listen(4000, () => {
  console.log("server running on 4000");
});

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