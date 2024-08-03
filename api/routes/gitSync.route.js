

import express from 'express';
import { gitSync } from '../controllers/gitSync.controllers.js';

const router = express.Router();

router.post('/sync', gitSync)


export default router;