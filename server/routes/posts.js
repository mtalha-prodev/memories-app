import express from "express";
import {
  createPosts,
  getPosts,
  updatePosts,
  deletePosts,
  likePosts,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", createPosts);
router.patch("/posts/:id", updatePosts);
router.delete("/posts/:id", deletePosts);
router.patch("/posts/:id/likePost", likePosts);

export default router;
