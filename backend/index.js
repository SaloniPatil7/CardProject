const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Card = require('./models/CardModel.js')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();

app.use(cors());
app.use(express.json());
let MongoDB=process.env.MongoDB;
const PORT=process.env.PORT || 3000
console.log(MongoDB);

async function ConnectDB() {
    mongoose.connect(MongoDB)
        .then(() => console.log('connected'))
        .catch((err) => console.log(err));
}
ConnectDB();

app.listen(PORT, () => {
    console.log("listening");
})

app.post('/add', async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        let newCard = new Card(data);
        await newCard.save();
        res.send(data);
    } catch (err) {
        console.log(err)
    }

})
app.get('/data', async (req, res) => {
    try {
        let data = await Card.find({});
        if(!data){
             return res.send('no data');
        }
        console.log(data)
        res.send(data);
    } catch (err) {
        console.log(err)
    }

})

