import { Router } from 'express';
import { getData } from '../controller.js';



export const summonerRoutes = Router();


summonerRoutes.get("/summoner/:summonerName", getData )




