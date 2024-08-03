import express from "express";
import { getAllRepositories, getRepositoryById, getRepositoryByName } from "../controllers/git.controllers.js";

const router = express.Router();

router.get("/repository", getAllRepositories)
router.get("/repository/name", getRepositoryByName)
router.get("/repository/:id", getRepositoryById)

export default router;