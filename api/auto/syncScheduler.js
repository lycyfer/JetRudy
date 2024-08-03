// syncScheduler.js

import { gitSync } from "../controllers/gitSync.controllers.js";


const syncInterval = 60 * 60 * 1000;

const startSyncScheduler = () => {
    setInterval(async () => {
        console.log('Starting automatic sync...');
        await gitSync();
        console.log('Automatic sync completed.');
    }, syncInterval);
};

export default startSyncScheduler;