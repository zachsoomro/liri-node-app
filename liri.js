require("dotenv").config();
//required variables//
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
//user input variable
var command = process.argv[2];
var input = process.argv[3];

// function bandsInTown() {
//   var URL =
//     "https://rest.bandsintown.com/artists/" + input + "/events?app_id=f8ac357c";

//   request(URL, function(error, response, body) {
//     if (error) console.log(error);
//     var result = JSON.parse(body)[0];
//     console.log(result);
//   });
// }
var movieOutput = function() {
  request(
    "http://www.omdbapi.com/?i=tt3896198&apikey=f8ac357c=" + input,
    function(error, response, body) {
      var result = JSON.parse(body);
      console.log(result);
    }
  );
};
function spotifyOutput(song) {
  spotify
    .search({
      type: "track",
      query: song
    })
    .then(function(response) {
      console.log(response);
    });
}
