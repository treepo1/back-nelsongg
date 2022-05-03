


export const getData = async(req,res)=>{
    const { summonerName } = req.params

    const summonerIdResponse = await axios.get(`${process.env.LOL_URL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.LOL_KEY}`).catch(e=> {
        return res.status(e.response.status).json(e.response.data)
    })

    if (summonerIdResponse.data) {
        const { id, profileIconId, summonerLevel, name} = summonerIdResponse.data


    const responseRanked = await axios.get(`${process.env.LOL_URL}/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.LOL_KEY}`).catch(e=> {
        return res.status(e.response.status).json(e.response.data)
    })

    const responseMastery = await axios.get(`${process.env.LOL_URL}/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${process.env.LOL_KEY}`)
    .catch(e => {return res.status(e.response.status).json(e.respons.data)})

    var championsId = responseMastery.data.slice(0,3).map((e)=> e.championId)


    const responseChampions = await axios.get(process.env.LOL_FULL_CHAMPIONS)
    .catch(e => {
        return res.status(e.response.status).json(e.response.data)
    })

    function GetImageFromId(id){
        let n = ''
        Object.keys(responseChampions.data.data).forEach(champion =>{
            if ((responseChampions.data.data[champion].key) == id){
                n = responseChampions.data.data[champion].image.full
            }
        })
        return n
    }

    championsId = championsId.map( (e) => GetImageFromId(e))

    if (responseRanked.data == 0){
        return res.json(
            {
                tier: 'UNRANKED',
                summonerLevel,
                iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
                name,
                championsURL1: championsId.map( (e) => `${process.env.LOL_CHAMPIONS}/${e}`)[0],
                championsURL2: championsId.map( (e) => `${process.env.LOL_CHAMPIONS}/${e}`)[1],
                championsURL3: championsId.map( (e) => `${process.env.LOL_CHAMPIONS}/${e}`)[2]

            }
        )

    }
    else{
        const { tier, rank, wins, losses, queueType } = responseRanked.data[0] ? responseRanked.data[0]:responseRanked.data[1]
        return res.json(
            {
                summonerLevel,
                tier,
                rank,
                wins,
                losses,
                queueType,
                iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
                winRate: ((wins/ (wins + losses))*100).toFixed(1),
                name,
                championsURL1: championsId.map( (e) => `${process.env.LOL_CHAMPIONS}/${e}`)[0],
                championsURL2: championsId.map( (e) => `${process.env.LOL_CHAMPIONS}/${e}`)[1],
                championsURL3: championsId.map( (e) => `${process.env.LOL_CHAMPIONS}/${e}`)[2]

            }
        )
        }
    }




}
