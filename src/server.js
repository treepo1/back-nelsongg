import summonerRoutes from './routes.js'
import express = from "express";
import json from "express";
import cors  from "cors";
import axios from "axios";

require("dotenv").config();



const app = express();



app.use(json())
app.use(cors())
app.use(summonerRoutes);
app.listen(3333)
console.log('Server running on port: 3333')
