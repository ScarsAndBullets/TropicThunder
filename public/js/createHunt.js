// Get references to page elements
var $clue = $("#clue");
var $correctAns = $("#correctAns");
var $wrongAnsOne = $("#wrongAnsOne");
var $wrongAnsTwo = $("#wrongAnsTwo");
var $wrongAnsThree = $("#wrongAnsTwo");

var $submitQuestion = $("#add-button");
var $submitHunt = $("#submit");

var question = {
  HuntId: "1",
  clue: $clue.val().trim()
};

var answers = {
  QuestionId: "1",
  correctAns: $correctAns.val().trim(),
  wrongAnsOne: $wrongAnsOne.val().trim(),
  wrongAnsTwo: $wrongAnsTwo.val().trim(),
  wrongAnsThree: $wrongAnsThree.val().trim()
}

// The API object contains methods for each kind of request we'll make
var API = {
  // After verifying huntCode val unique, save new record with huntCode
  saveHunt: function (data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/hunts",
      data: JSON.stringify(data)
    });
  },
  // Get all hunt records - compare to generated huntCode
  getHunts: function () {
    return $.ajax({
      url: "api/hunts",
      type: "GET"
    });
  },
  getCurrentHunt: function (data) {
    return $.ajax({
      url: "api/hunts/" + data,
      type: "GET"
    });
  },
  // save question from form to new hunt
  saveQuestion: function (data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/questions",
      data: JSON.stringify(data)
    });
  },
  // get all questions saved for given huntId
  getQuestions: function (data) {
    return $.ajax({
      url: "api/questions/" + data,
      type: "GET"
    });
  },
  getQuestionId: function (data) {
    return $.ajax({
      url: "api/questions/" + data,
      type: "GET"
    });
  },
  // delete specific question and answer set
  deleteQuestions: function (data) {
    return $.ajax({
      url: "api/questions/" + data,
      type: "DELETE"
    });
  },
  // saves answers associated with specific 
  saveAnswers: function (data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/questions",
      data: JSON.stringify(data)
    });
  },
  getAnswers: function () {
    return $.ajax({
      url: "api/hunts",
      type: "GET"
    });
  }
};

function addQuestion(event) {
  event.preventDefault();


  var answers = {
    QuestionId: "1",
    correctAns: $correctAns.val().trim(),
    wrongAnsOne: $wrongAnsOne.val().trim(),
    wrongAnsTwo: $wrongAnsTwo.val().trim(),
    wrongAnsThree: $wrongAnsThree.val().trim()
  }


  question.clue = $clue.val().trim();
  console.log("stringified question obj " + JSON.stringify(question));

  API.saveQuestion(question).then(function () {
    API.getQuestionId(question.HuntId).then(function (data) {
      console.log("question OBJ " + JSON.stringify(question))
      console.log("huntId is " + question.HuntId)
      console.log("questionId is " + data.id)
      // answers.QuestionId = data.id;

    })
  })
  answers.QuestionId = 1;
  answers.correctAns = $correctAns.val().trim()
  answers.wrongAnsOne = $wrongAnsOne.val().trim()
  answers.wrongAnsTwo = $wrongAnsTwo.val().trim()
  answers.wrongAnsThree = $wrongAnsThree.val().trim()
  API.saveAnswers(answers).then(function () {
    //populateQuestions();
  })
};


// Submits a new question and corresponding answers
function submitQuestion(event) {
  event.preventDefault();

  question.clue = $clue.val().trim();
  console.log("stringified question obj " + JSON.stringify(question));

  API.saveQuestion(question).then(function () {
    API.getQuestionId(question.HuntId).then(function (data) {
      console.log("question OBJ " + JSON.stringify(question))
      console.log("huntId is " + question.HuntId)
      console.log("questionId is " + data.id)
      // answers.QuestionId = data.id;

    })
  })
  answers.QuestionId = 1;
  answers.correctAns = $correctAns.val().trim()
  answers.wrongAnsOne = $wrongAnsOne.val().trim()
  answers.wrongAnsTwo = $wrongAnsTwo.val().trim()
  answers.wrongAnsThree = $wrongAnsThree.val().trim()
  API.saveAnswers(answers).then(function () {
    //populateQuestions();
  })
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

// Add event listeners to the submit and delete buttons
$submitQuestion.click(addQuestion);
$submitHunt.click(submitHunt);

// Generate random 9 digit hyphen-separated huntCode
function genHuntCode() {
  var huntCode = "";
  for (var i = 0; i < 11; i++) {
    if (i === 3 || i === 7) {
      huntCode += "-";
    } else {
      huntCode += Math.floor(Math.random() * 10);
    }
  }
  console.log("huntCode: " + huntCode);
  return huntCode;
}

// Validates huntCode is unique and then saves it to a new Hunts record
function uniqueHuntCode() {
  API.getHunts().then(function (data) {
    console.log("Data from getHunts API call: " + JSON.stringify(data));
    var huntCodes = data.map(function (data) {
      return data.huntCode;
    })
    console.log("Current huntCodes: " + huntCodes);
    condition = true;
    while (condition) {
      condition = false;
      if (huntCodes.includes(Hunt.huntCode)) {
        condition = true;
        Hunt.huntCode = genHuntCode();
      }
    }
    console.log("Hunt object: " + JSON.stringify(Hunt));
    API.saveHunt(Hunt).then(function () {
      API.getCurrentHunt(Hunt.huntCode).then(function (data) {
        console.log("Hunt ID for foreign key " + data.id);
        question.HuntId = data.id;
      })
    });
  });
}

var Hunt = {
  huntCode: ""
}

$(document).ready(function () {
  console.log("DOM loaded - Create Hunt");

  // generate random hunt code
  Hunt.huntCode = genHuntCode();
  $("#huntId").html(Hunt.huntCode);
  // uniqueHuntCode();

});