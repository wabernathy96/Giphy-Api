$(document).ready(function () {

// Global Variables
    var topics = ["Mr. Krabs", "Sandy", "Spongebob", "Patrick"];
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bb3SQQSJa76ox8Ep0uegb4XGBG4xwpeJ&q=" + topics + "&limit=10&offset=0&rating=PG&lang=en";

// Generate Buttons from topics array
    function createButtons (){
        $("#buttons").empty();
        for (var i=0; i<topics.length; i++){
            var genBut = $('<button class="btn-outline-secondary bg-light">');
            genBut.append(topics[i]);
            $("#buttons").append(genBut);
        };
    };

    createButtons();

// Append new topic from search to var topics
    $("#new-button").on("click", function(){

    });

// Use Giphy api to generate 10 gifs on button click


});