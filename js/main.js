// Function to build the question display (question, buttons for true false)
function displayQuestion(animal) {
    // Show Q icon, back button, remove menu
    document.getElementById('chooseAnimal').style.display = "none";
    document.getElementById('headerTitle').style.display = "none";
    document.getElementById('goBackButton').style.display  = "block";
    
    switch (animal) {
        case raccoon:
            displayAnimalIcon("Raccoon", "1");
            buildQuestion("Raccoon");
            break;
        case opossum:
            displayAnimalIcon("Opossum", "2");
            buildQuestion("Opossum");
            break;
        case groundhog:
            displayAnimalIcon("Groundhog", "3");
            buildQuestion("Groundhog");
            break;
        case bat:
            displayAnimalIcon("Bat", "4");
            buildQuestion("Bat");
            break;
        case skunk:
            displayAnimalIcon("Skunk", "5");
            buildQuestion("Skunk");
            break;
        case beaver:
            displayAnimalIcon("Beaver", "6");
            buildQuestion("Beaver");
            break;
        default:
            document.write("Something went wrong!");
    }
}

// Build answer box - show answer, remove buttons
function buildAnswer() {
    document.getElementById('userAnswerButtons').style.display = "none";
    document.getElementById('answerSection').style.display = "block";

}

// Build question box
function buildQuestion(animal) {
    document.getElementById('questionSection').style.display = "block";
    var question = getQuestion(animal, getRandom(0, 4));
    document.getElementById('questionBox').innerHTML = question;
}

// Get random number for choosing question in 2D array
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate question
function getQuestion(animal, questionNum) {
    switch(animal) {
        case "Raccoon":
            return q_raccoon[questionNum][0];
            break;
        case "Opossum":
            return q_opossum[questionNum][0];
            break;
        case "Groundhog":
            return q_groundhog[questionNum][0];
            break;
        case "Bat":
            return q_bat[questionNum][0];
            break;
        case "Skunk":
            return q_skunk[questionNum][0];
            break;
        case "Beaver":
            return q_beaver[questionNum][0];
            break;
        default:
            return "ERROR! ERROR! MISTAKES WERE MADE";
    }
}

// Display animal icon for questions
function displayAnimalIcon(animal, num) {
    document.getElementById('animalIconQuestion').style.display = "block";
    document.getElementById('currentAnimalQ').innerHTML = animal;
    document.getElementById('currentAnimalNum').innerHTML = num;
}

// Collection of animal question arrays
var q_raccoon = [
    [ "Question 1 for raccoon", true, "Answer explaination" ],
    [ "Question 2 for raccoon", true, "Answer explaination" ],
    [ "Question 3 for raccoon", true, "Answer explaination" ],
    [ "Question 4 for raccoon", true, "Answer explaination" ],
    [ "Question 5 for raccoon", true, "Answer explaination" ]
]

var q_opossum = [
    [ "Question 1 for opossum", false, "Answer explaination" ],
    [ "Question 2 for opossum", false, "Answer explaination" ],
    [ "Question 3 for opossum", false, "Answer explaination" ],
    [ "Question 4 for opossum", false, "Answer explaination" ],
    [ "Question 5 for opossum", false, "Answer explaination" ]
]

var q_bat = [
    [ "Question 1 for bat", true, "Answer explaination" ],
    [ "Question 2 for bat", true, "Answer explaination" ],
    [ "Question 3 for bat", true, "Answer explaination" ],
    [ "Question 4 for bat", true, "Answer explaination" ],
    [ "Question 5 for bat", true, "Answer explaination" ]
]

var q_skunk = [
    [ "Question 1 for skunk", true, "Answer explaination" ],
    [ "Question 2 for skunk", true, "Answer explaination" ],
    [ "Question 3 for skunk", true, "Answer explaination" ],
    [ "Question 4 for skunk", true, "Answer explaination" ],
    [ "Question 5 for skunk", true, "Answer explaination" ]
]

var q_beaver = [
    [ "Question 1 for beaver", true, "Answer explaination" ],
    [ "Question 2 for beaver", true, "Answer explaination" ],
    [ "Question 3 for beaver", true, "Answer explaination" ],
    [ "Question 4 for beaver", true, "Answer explaination" ],
    [ "Question 5 for beaver", true, "Answer explaination" ]
]

var q_groundhog = [
    [ "Question 1 for groundhog", true, "Answer explaination" ],
    [ "Question 2 for groundhog", true, "Answer explaination" ],
    [ "Question 3 for groundhog", true, "Answer explaination" ],
    [ "Question 4 for groundhog", true, "Answer explaination" ],
    [ "Question 5 for groundhog", true, "Answer explaination" ]
]