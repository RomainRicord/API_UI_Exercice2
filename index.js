import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()

let rawdata = fs.readFileSync('data.json');
let cards = JSON.parse(rawdata);

const cors_opt = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors())

app.get('/',cors(cors_opt),(req,res) => {
    res.json(cards)
})

app.post('/card',cors(cors_opt),(req,res) => {

    const {date,title,distance,duration,image} = req.headers

    cards.push({
        date:date,
        title:title,
        distance:distance,
        duration:duration,
        image:image
    })

    console.log(cards)

})

app.listen(3000,() => {
    console.log('API DISPONIBLE PORT 3000')
})