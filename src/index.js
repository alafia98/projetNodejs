const express = require('express');
const app = express();
const PORT = 3000;
const collection = require('./mongodb');


const path = require('path');
const hbs = require('hbs');
const templatePath = path.join(__dirname, '../templates');

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get('/', (req, res) => {
    res.render('login');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', async (req, res) => {
    const data = {
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }
    await collection.insertMany([data]);

    res.render("home");
})



app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});