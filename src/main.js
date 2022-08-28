const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.use(express.static(publicDirectoryPath));
app.set('views', viewsPath);

app.get('/kanyewest', (req, res) => {
    res.render('kanyewest');
})

app.listen(3000);