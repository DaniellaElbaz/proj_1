window.onload = () => {
    OpenEvents();
};
function OpenEvents(){
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8080;
    const booksData = require('../data/Events.json');
    app.use((req, res, next) => {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
    'Content-Type': 'application/json'
    });
    next();
    });
    app.get("/Events", (req, res) => {
    res.json(booksData);
    });
    app.listen(port);
    console.log(`listening on port ${port}`);
}
function OpenEvents(){
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8080;
    const booksData = require('../data/eventsHistory.json');
    app.use((req, res, next) => {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
    'Content-Type': 'application/json'
    });
    next();
    });
    app.get("/eventsHistory", (req, res) => {
    res.json(booksData);
    });
    app.listen(port);
    console.log(`listening on port ${port}`);
}
function OpenEvents(){
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8080;
    const booksData = require('../data/noaIdPic.json');
    app.use((req, res, next) => {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
    'Content-Type': 'application/json'
    });
    next();
    });
    app.get("/noaIdPic", (req, res) => {
    res.json(booksData);
    });
    app.listen(port);
    console.log(`listening on port ${port}`);
}
function OpenEvents(){
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8080;
    const booksData = require('../data/reports.json');
    app.use((req, res, next) => {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
    'Content-Type': 'application/json'
    });
    next();
    });
    app.get("/reports", (req, res) => {
    res.json(booksData);
    });
    app.listen(port);
    console.log(`listening on port ${port}`);
}