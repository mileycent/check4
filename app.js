const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Model = require('./mode/template.js');
const { doesNotMatch } = require('assert');

const app = express();
dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello')
});
app.get ('/add',async(req, res) => {
    const people = await Model.create([{
        name: 'Tony',
        age : 35,
        favoriteFoods: ["garri",'milo']
    },{
        name: 'Matilda',
        age : 17,
        favoriteFoods: ['indomie','stew']
    }])
    console.log(people);
})

app.get('/find', async(req, res) => {
    const pin = await Model.find()
    console.log(pin);

});

app.get ('/subtract', async(req, res) => {
    const present = await Model.find({age: 17})
    console.log(present);
});

app.get('/multiply', async(req, res) => {
    const past = await Model.findOne({favoriteFood: "stew"})
    console.log(past);
});
app.get('/divide', async(req, res) => {
    const purple = await Model.findById('652a7fe338b43de10c1d92b2')
    purple.favoriteFood.push('hamburger');
    console.log(purple);
})
app.get('/comma', async(req, res) => {
    const pretty = await Model.findOneAndUpdate({name: Matilda, age: 20})
    console.log(pretty);
})
app.get('/wait', async(req, res) => {
    const hell = await Model.findByIdAndRemove('652a807ec3a648ab133734e4')
    console.log(hell);
})
app.get('/wheel', async(req,res) => {
    const barrow = await Model.remove({name: 'Matilda'})
    done()
    console.log(barrow);
})




const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(5000, console.log('listening on port 5000')))
.catch((err) => console.log(err));


