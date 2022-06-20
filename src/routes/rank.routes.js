import { Router } from 'express';
import RankController from '../controllers/rank.controller.js';


const rankcontroller = new RankController()

export const rankRoutes = Router();


rankRoutes.get("/challenger_players/:queue_type", rankcontroller.getChallengerPlayersByQueueType)
rankRoutes.get("/grandmaster_players/:queue_type", rankcontroller.getGrandMasterPlayersByQueueType)
rankRoutes.get("/master_players/:queue_type", rankcontroller.getMasterPlayersByQueueType)




