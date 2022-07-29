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

app.use(express.static("public"))

// for any HTTP request, return a random emoji
app.get('/', function(req, res) {
    res.send("hello");
}
);


app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));
