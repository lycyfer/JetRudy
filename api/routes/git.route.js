import express from "express";
import { getAllRepositories, getRepositoryById } from "../controllers/git.controllers.js";

const router = express.Router();

router.get("/repository", getAllRepositories)
router.get("/repository/:id", getRepositoryById)

export default router;