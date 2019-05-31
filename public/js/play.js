$(document).ready(function () {
    //hunt-container holds all clues or stops
    var huntContainer = $(".hunt-container");

    //variable to hold stops
    var stops;

    //Looks for a query param in the url for hunt_id
    var url = window.location.search;
    var huntId;
    if (url.indexOf("?hunt_id=") !== -1) {
        huntId = url.split("=")[1];
        getStops(huntId);
    } else {
        console.log("Err");
    }

    //grab stops from the database and update the view
    function getStops(hunt) {
        huntId = hunt || "";
        if (huntId) {
            huntId = "/?hunt_id=" + huntId;
        }
        $.get("/api/stops" + huntId, function (data) {
            console.log("Stops", data);
            posts = data;
            if (!stops || !stops.length) {
                displayEmpty(hunt);
            } else {
                initializeRows();
            }
        });
    }

    //InitializeRows handles appending all of our constructed stop HTML inside hunt-container
    function initializeRows() {
        huntContainer.empty();
        var stopsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            stopsToAdd.push(createNewRow(stops[i]));
        }
        huntContainer.append(stopsToAdd);
    }

    // This function constructs a stop's HTML
    function createNewRow(stop) {
        var newStopCard = $("<div>");
        newStopCard.addClass("card");
        //stop or question
        var newStopText = $("<h4>");
        //add a field for the answer
        //need to populate answer options as buttons
        // //add a submit button
        // var submitBtn = $("<button>");
        // submitBtn.text("SUBMIT");
        // submitBtn.addClass("submit btn btn-info");
        //could add css here
        newStopCard.css({
            float: "",
            color: "",
            "margin-top": "-10px"
        });
    }
});
