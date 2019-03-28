require("dotenv").config();
//required variables//
var keys = require("./keys.js");
var fs= require("fs");
var request= require('request');
var Spotify= require('node-spotify-api');
var spotify= new Spotify(keys.spotify);
var axios= require('axios');
var moment= require('moment');
//user input variable
var command= process.argv[2];
var input= process.argv[3];

function spotifyOutput = function(query){
    spotify.search({type: 'track', query: query, limit:1})
}
