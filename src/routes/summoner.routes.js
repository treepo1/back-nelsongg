import { Router } from 'express';
import { getData } from '../controller.js';



export const routes = Router();


routes.get("/summoner/:summonerName", getData )




