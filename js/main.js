// Function to build the question display (question, buttons for true false)
function displayQuestion(animal) {
    // Show Q icon, back button, remove menu
    document.getElementById('chooseAnimal').style.display = "none";
    document.getElementById('headerTitle').style.display = "none";
    document.getElementById('goBackButton').style.display  = "block";
    
    switch (animal) {
        case raccoon:
            document.getElementById('animalIconQuestion').style.display = "block";
            document.getElementById('questionSection').style.display = "block";
            document.getElementById('questionBox').innerHTML = "<p>Question 1?</p>";
            break;
        case opossum:
            document.getElementById('animalIconQuestion').style.display = "block";
            document.getElementById
            document.getElementById('questionSection').style.display = "block";
            document.getElementById('questionBox').innerHTML = "<p>Opossum question?</p>";
            break;
        case groundhog:
            document.write('groundhog');
            break;
        case bat:
            document.write('bat');
            break;
        case skunk:
            document.write('skunk');
            break;
        case beaver:
            document.write('beaver');
            break;
        default:
            document.write('you done fucked up');
    }
}

// Displays answer box, intially hidden
function displayAnswer() {
    // Show answer, remove buttons
    document.getElementById('userAnswerButtons').style.display = "none";
    document.getElementById('answerSection').style.display = "block";

}

// Get random number for question
function getRandom() {

}

// Generate question
function getQuestion(animal) {

}

// Collection of animal question arrays
var qRaccoon = [
    [ "Question 1 for raccoon", true, false, "Answer explaination" ],
    [ "Question 2 for raccoon", true, false, "Answer explaination" ],
    [ "Question 3 for raccoon", true, false, "Answer explaination" ],
    [ "Question 4 for raccoon", true, false, "Answer explaination" ],
    [ "Question 5 for raccoon", true, false, "Answer explaination" ]
]

var qOpossum = [
    [ "Question 1 for opossum", true, false, "Answer explaination" ],
    [ "Question 2 for opossum", true, false, "Answer explaination" ],
    [ "Question 3 for opossum", true, false, "Answer explaination" ],
    [ "Question 4 for opossum", true, false, "Answer explaination" ],
    [ "Question 5 for opossum", true, false, "Answer explaination" ]
]

var qBat = [
    [ "Question 1 for bat", true, false, "Answer explaination" ],
    [ "Question 2 for bat", true, false, "Answer explaination" ],
    [ "Question 3 for bat", true, false, "Answer explaination" ],
    [ "Question 4 for bat", true, false, "Answer explaination" ],
    [ "Question 5 for bat", true, false, "Answer explaination" ]
]

var qSkunk = [
    [ "Question 1 for skunk", true, false, "Answer explaination" ],
    [ "Question 2 for skunk", true, false, "Answer explaination" ],
    [ "Question 3 for skunk", true, false, "Answer explaination" ],
    [ "Question 4 for skunk", true, false, "Answer explaination" ],
    [ "Question 5 for skunk", true, false, "Answer explaination" ]
]

var qBeaver = [
    [ "Question 1 for beaver", true, false, "Answer explaination" ],
    [ "Question 2 for beaver", true, false, "Answer explaination" ],
    [ "Question 3 for beaver", true, false, "Answer explaination" ],
    [ "Question 4 for beaver", true, false, "Answer explaination" ],
    [ "Question 5 for beaver", true, false, "Answer explaination" ]
]

var qGroundhog = [
    [ "Question 1 for groundhog", true, false, "Answer explaination" ],
    [ "Question 2 for groundhog", true, false, "Answer explaination" ],
    [ "Question 3 for groundhog", true, false, "Answer explaination" ],
    [ "Question 4 for groundhog", true, false, "Answer explaination" ],
    [ "Question 5 for groundhog", true, false, "Answer explaination" ]
]