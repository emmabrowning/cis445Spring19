// REST API PROJECT
// Programmed by: Emma Browning
const express = require('express');
const app = express();

// if user does not specify a path
app.get('/', function(request, response){
    response.writeHead(200);
    response.write('<html><body><p>Please specify a path</p></body></html>');
    response.end();
});

// get all players
app.get('/player', function(request, response){
    const player = request.params.player;
    response.write("<html><body><p>Display all players " + request.url + "</p></body></html>");
    response.end();
});


// get a single player
app.get('/player/:player', function(request, response){
    const player = request.params.player;
    response.write("<html><body><p>You got " + player + "</p></body></html>");
    response.end();
});


// update a player
app.put('/player/:player', function(request, response){
   const player = request.params.player;
   response.write("<html><body><p>This updates " + player + "</p></body></html>");
   response.end();
});


// delete a player
app.delete('/player/:player', function(request, response){
    const player = request.params.player;
    response.write("<html><body><p>" + player + " has been deleted");
    response.write("</p></body></html>");
    response.end();
});

// add a player
app.post('/player/:player', function(request, response){
    const player = request.params.player;
    response.write("<html><body><p>" + player + " has been added");
    response.write("</p></body></html>");
    response.end();
});


// get items
app.get('/item', function(request, response){
    const item = request.params.item;
    response.write("<html><body><p>Get all items");
    response.write("</p></body></html>");
    response.end();
});


// get item
app.get('/item/:item', function(request, response){
    const item = request.params.item;
    response.write("<html><body><p>You got " + item);
    response.write("</p></body></html>");
    response.end();
});


// add item
app.post('/item/:item', function(request, response) {
    const item = request.params.item;
    response.write("<html><body><p>" + item + " has been added");
    response.write("</p></body></html>");
    response.end();
});


// delete item
app.delete('/item/:item', function(request, response){
    const item = request.params.item;
    response.write("<html><body><p>Item has been DELETED.");
    response.write("</p></body></html>");
    response.end();
});


// update item
app.put('/item/:item', function(request, response){
   const item = request.params.item;
   response.write("<html><body><p>" + item + " has been updated");
   response.write("</p></body></html>");
   response.end();
});


// get skills
app.get('/skills', function(request, response){
    const skills = request.params.skills;
    response.write("<html><body><p>Displays all skills.");
    response.write("</p></body></html");
    response.end();
});

// update skills
app.put('/skills/:skills', function(request, response){
    const skills = request.params.skills;
    response.write("<html><body><p> This skill has been updated: " + skills);
    response.write("</p></body></html");
    response.end();
});


// delete skills
app.delete('/skills/:skills', function(request, response){
    const skills = request.params.skills;
    response.write("<html><body><p>The skill: " + skills + " has been DELETED.");
    response.write("</p></body></html");
    response.end();
});

// add skills
app.post('/skills/:skills', function(request, response){
    const skills = request.params.skills;
    response.write("<html><body><p>" + skills + " has been added");
    response.write("</p></body></html");
    response.end();
});


app.listen(8080, function() {
    console.log('Express is now running on port 8080...');
});
