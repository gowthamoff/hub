import posts from './routes/posts.js'
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorhandler.js';
import unKnownRoute from './middleware/unknownRoute.js';
import express from 'express'
const app = express();

// get directory name
import { fileURLToPath } from 'url'
import path from 'path';
const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)
//to access html or other files without defined route
app.use(express.static(path.join(__dirname, "public")));

//middleware to submit forms // body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// logger middleware
app.use(logger)

app.use('/api/posts', posts)

// error handler middleware
app.use(errorHandler)

// route error handler
app.use(unKnownRoute)

app.listen(3000, () => {
  console.log("server running on 3000");
});

// app.post("/posts/:id", (req, res) => {
//   console.log(req.body);
//   res.send('wef')
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// app.get("/", (req, res) => {
//   res.send("hello");
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });