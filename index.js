// import express
const express = require('express');
const app = express();


emojis = [
    "😳",
    "😶",
    "😅",
    "😁",
    "💗"
    ]

app.use(express.static("public"))

// for any HTTP request, return a random emoji
app.get('/', function(req, res) {
    res.send(emojis[Math.floor(Math.random() * emojis.length)]);
}
);


app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));
