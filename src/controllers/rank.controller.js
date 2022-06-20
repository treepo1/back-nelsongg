import axios from "axios"

export default class RankController {

    async getChallengerPlayersByQueueType(req, res) {
        const { queue_type } = req.params
        const ChallengerPlayersByQueueType = await axios.get(`${process.env.LOL_URL}${process.env.LOL_CHALLENGER_PLAYERS}${queue_type}?api_key=${process.env.LOL_KEY}`)
            .catch((err) => { return res.status(err.response.status).json(err.response.data) })
        return res.json(ChallengerPlayersByQueueType.data)
    }

    async getGrandMasterPlayersByQueueType(req, res) {
        const { queue_type } = req.params
        const GrandMasterPlayersByQueueType = await axios.get(`${process.env.LOL_URL}${process.env.LOL_GRANDMASTER_PLAYERS}${queue_type}?api_key=${process.env.LOL_KEY}`)
            .catch((err) => { return res.status(err.response.status).json(err.response.data) })
        return res.json(GrandMasterPlayersByQueueType.data)
    }

    async getMasterPlayersByQueueType(req, res) {
        const { queue_type } = req.params
        const MasterPlayersByQueueType = await axios.get(`${process.env.LOL_URL}${process.env.LOL_MASTER_PLAYERS}${queue_type}?api_key=${process.env.LOL_KEY}`)
            .catch((err) => { return res.status(err.response.status).json(err.response.data) })
        return res.json(MasterPlayersByQueueType.data)
    }
}