const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Card = require('./models/CardModel.js')
const cors = require('cors')

app.use(cors());
app.use(express.json());
async function ConnectDB() {
    mongoose.connect('mongodb://127.0.0.1:27017/Cards')
        .then(() => console.log('connected'))
        .catch((err) => console.log(err));
}
ConnectDB();

app.listen('3000', () => {
    console.log("listening");
})

app.post('/add', (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        let newCard = new Card(data);
        newCard.save();
        res.send(data);
    } catch (err) {
        console.log(err)
    }

})
app.get('/data', async (req, res) => {
    try {
        let data = await Card.find({});
        if(!data){
            res.send('no data');
        }
        console.log(data)
        res.send(data);
    } catch (err) {
        console.log(err)
    }

})

