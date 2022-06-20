import { Router } from 'express';
import SummonerController  from '../controllers/summoner.controller.js';


const summonercontroller = new SummonerController()

export const summonerRoutes = Router();


summonerRoutes.get("/summoner/:summonerName", summonercontroller.getData )




