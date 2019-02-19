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
app.get('/players', function(request, response){
    //create variable to handle all players
    const player = request.params.players;
    response.write("<html><body><p>You got ALL players");
    response.write("</p></body></html>");
    response.end();
});


// get a single player
app.get('/player', function(request, response){
    //create variable to handle one player
    const player = request.params.player;
    response.write("<html><body><p>You got ONE player");
    response.write("</p></body></html>");
    response.end();
});


// update a player
app.patch('/player', function(request, response){
   const player = request.params.player;
       response.write("<html><body><p>This player has been UPDATED.");
   response.write("</p></body></html>");
   response.end();
});


// delete a player
app.delete('/player', function(request, response){
    const player = request.params.player;
    response.write("<html><body><p>Player DELETED");
    response.write("</p></body></html>");
    response.end();
})

// add a player
app.post('/player', function(request, response){
    const player = request.params.players;
    response.write("<html><body><p>New player ADDED");
    response.write("</p></body></html>");
    response.end();
})


// get items
app.get('/items', function(request, response){
    const items = request.params.items;
    response.write("<html><body><p>You got ALL items");
    response.write("</p></body></html>");
    response.end();
});


// get item
app.get('/item', function(request, response){
    const item = request.params.item;
    response.write("<html><body><p>You got ONE item");
    response.write("</p></body></html>");
    response.end();
});


// add item
app.post('/:item', function(request, response) {
    const item = request.params.item;
    response.write("<html><body><p>Item ADDED");
    response.write("</p></body></html>");
});


// delete item
app.delete('/:item', function(request, response){
    const item = request.params.item;
    response.write("<html><body><p>Item has been DELETED.");
    response.write("</p></body></html>");
    response.end();
});


// update item
app.patch('/:item', function(request, response){
   const item = request.params.item;
   response.write("<html><body><p>This item has been UPDATED.");
   response.write("</p></body></html>");
   response.end();
});


// get highscore
app.get('/highscore', function(request, response){
    const score = request.params.score;
    response.write("<html><body><p>This is the high score.");
    response.write("</p></body></html");
    response.end();
});

// update highscore
app.patch('/:highscore', function(request, response){
    const score = request.params.score;
    response.write("<html><body><p>This is the UPDATED high score.");
    response.write("</p></body></html");
    response.end();
});


// delete highscore
app.delete('/:highscore', function(request, response){
    const score = request.params.score;
    response.write("<html><body><p>The high score has been DELETED.");
    response.write("</p></body></html");
    response.end();
});

// add highscore
app.post('/:highscore', function(request, response){
    const score = request.params.score;
    response.write("<html><body><p>New score ADDED");
    response.write("</p></body></html");
    response.end();
});


app.listen(8080, function() {
    console.log('Express is now running on port 8080...');
});
