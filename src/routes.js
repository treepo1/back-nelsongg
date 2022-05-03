import { Router } from 'express';
import { getData } from './controller.js';



const routes = Router();


routes.get("/summoner/:summonerName", getData )



export default routes;
