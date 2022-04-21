import express from "express";
import { createPosts, getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", createPosts);

export default router;
