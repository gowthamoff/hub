import express from 'express'
import { deletePost, editPost, getPosts, getPostsById, newPost } from '../controllers/postController.js';
const router = express.Router()

//get all posts with limits
router.get("/", getPosts);

// get single post by id
router.get("/:id", getPostsById);

// post new data 
router.post("/", newPost)

// edit existing post using id 
router.put('/', editPost)

// delete post using id
router.delete('/:id', deletePost)

export default router;