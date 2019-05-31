// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $exampleList = $("#example-list");

var $clue = $("#clue");
var $correctAns = $("#correctAns");
var $wrongAnsOne = $("#wrongAnsOne");
var $wrongAnsTwo = $("#wrongAnsTwo");
var $wrongAnsThree = $("#wrongAnsTwo");
var $wrongAnsFour = $("#wrongAnsTwo");

var $submitHunt = $("#submitHunt");
var $submitQuestion = $("submitQuestion");

var questionList = [];

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var submitQuestion = function (event) {
  event.preventDefault();

  var question = {
    clue: $clue.val().trim(),
    correctAns: $correctAns.val().trim(),
    wrongAnsOne: $wrongAnsOne.val().trim(),
    wrongAnsTwo: $wrongAnsTwo.val().trim(),
    $wrongAnsThree: $$wrongAnsThree.val().trim()
  };

  questionList.push(question);

  if (!(question.clue && question.correctAns && question.wrongAnsOne && question.wrongAnsTwo && question.$wrongAnsThree)) {
    alert("You must enter a question and four answers!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

var submitHunt = function (event) {
  event.preventDefault();

  var question = {
    clue: $clue.val().trim(),
    correctAnswer: $exampleDescription.val().trim(),
    wrongAnsOne: $exampleDescription.val().trim(),
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submit.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);



$submitQuestion.click(submitQuestion);
$submitHunt.click(submitHunt);

function genHuntCode() {
  var huntCode = "";
  for (var i = 0; i < 11; i++) {
    if (i === 3 || i === 7) {
      huntCode += "-";
    } else {
      huntCode += Math.floor(Math.random() * 10);
    }
  }
  console.log("huntCode = " + huntCode);
  return huntCode;
}


$(document).ready(function () {
  console.log("DOM loaded - Create Hunt");

  // generate random hunt code
  genHuntCode();

});