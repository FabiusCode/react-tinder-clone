import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './modules/dbCards.js'

// UftdjcVYPrjO7lZa

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:UftdjcVYPrjO7lZa@cluster0.nigl1.mongodb.net/db?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    userNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// Api Endpoints
app.post('/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
