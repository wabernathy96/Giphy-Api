$(document).ready(function () {

// Global Variables
    var topics = ["Bart", "Ralph", "Skinner", "Moe"];
    

// Generate Buttons from topics array
    function createButtons (){
        $("#buttons").empty();
        for (var i=0; i<topics.length; i++){
            var genBut = $('<button>').attr("id", "new-buttons").addClass("btn btn-outline-secondary bg-light topics-btn").attr("data-name", topics[i]).text(topics[i]);
            $("#buttons").append(genBut);
        };
    };

    createButtons();

// Append new topic from search to var topics
    $("#new-button").on("click", function(e){
        e.preventDefault();
        var addChar = $("#button-input").val().trim();
        if(topics.indexOf(addChar) === -1){
            topics.push(addChar);
        };

        createButtons();

    });

// Use Giphy api to generate 10 gifs on button click
   function displayGif(){

        $("#gifs").empty();

        var topicsSearch = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bb3SQQSJa76ox8Ep0uegb4XGBG4xwpeJ&q=" + topicsSearch + "&limit=10&offset=0&rating=PG-13&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(res){
            console.log(res);
            var results = res.data;

            for(i=0; i<results.length; i++){
                var gifDiv = $("<div>").addClass("gif-div").addClass("col-md-4");
                
                var gifMoving = results[i].images.fixed_height.url;
                // console.log(gifMoving);
                var gifStatic = results[i].images.fixed_height_still.url;
                // console.log(gifStatic);
                var gifRating = results[i].rating;
                // console.log(gifRating);

                var showGif = $("<img>");
                showGif.attr("src", gifStatic).attr("gif-state", "still").attr("gif-still", gifStatic).attr("gif-moving", gifMoving).addClass("characterGif");
                var showRating = $("<p> Rating: " + gifRating + "</p>");
                
                gifDiv.append(showGif).append(showRating);


                $("#gifs").append(gifDiv);
            };
             
        });
    };

    function staticAnimated(){
        var currentState = $(this).attr("gif-state");

        if(currentState === "still"){
            $(this).attr("src", $(this).attr("gif-moving"));
            $(this).attr("gif-state", "moving");
        } else {
            $(this).attr("src", $(this).attr("gif-still"))
            $(this).attr("gif-state", "still")
        };
    };

    $(document).on("click", ".topics-btn", displayGif);

    $(document).on("click", ".characterGif", staticAnimated);
});