import express from "express"
import cors from "cors"
import gitRoute from "./routes/git.route.js"
import gitSyncRoute from "./routes/gitSync.route.js"
import startSyncScheduler from "./auto/syncScheduler.js"


const app = express()

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());


app.use('/api', gitRoute)
app.use('/api/git', gitSyncRoute)

startSyncScheduler();

app.listen(4444, () => {
    console.log("server is running on port 4444")
})