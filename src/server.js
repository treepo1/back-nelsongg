import { summonerRoutes } from './routes/summoner.routes.js'
import { rankRoutes } from './routes/rank.routes.js'
import express from "express";
import json from "express";
import cors  from "cors";
import 'dotenv/config';




const app = express();



app.use(json())
app.use(cors())
app.use(summonerRoutes);
app.use(rankRoutes);
app.listen(3333)
console.log('Server running on port: 3333')
