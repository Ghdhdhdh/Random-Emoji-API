// import express
const express = require('express');
const app = express();


emojis = [
    "blushing",
    "happy",
    "gun",
    "lol",
    "pleading",
    "sad",
    "screaming",
    "shocked",
    "shy",
    "sick",
    "silly",
    "sleeping",
    "sleepy",
    "smiling",
    "surprised",
    "tired"
    ]

// for any HTTP request, return a random emoji
app.get('/', function(req, res) {
    res.send(emojis[Math.floor(Math.random() * emojis.length)]);
}
);
