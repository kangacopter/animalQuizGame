// Function to build the question display (question, buttons for true false)
function displayQuestion(animal) {
    // Show Q icon, back button, remove menu
    document.getElementById('chooseAnimal').style.display = "none";
    document.getElementById('headerTitle').style.display = "none";
    document.getElementById('goBackButton').style.display  = "block";
    
    switch (animal) {
        case raccoon:
            var animalArray = getAnimalData("Raccoon");
            displayAnimalIcon("Raccoon", "1");
            buildQuestion(animalArray);
            break;
        case opossum:
            var animalArray = getAnimalData("Opossum");
            displayAnimalIcon("Opossum", "2");
            buildQuestion(animalArray);
            break;
        case groundhog:
            var animalArray = getAnimalData("Groundhog");
            displayAnimalIcon("Groundhog", "3");
            buildQuestion(animalArray);
            break;
        case bat:
            var animalArray = getAnimalData("Bat");
            displayAnimalIcon("Bat", "4");
            buildQuestion(animalArray);
            break;
        case skunk:
            var animalArray = getAnimalData("Skunk");
            displayAnimalIcon("Skunk", "5");
            buildQuestion(animalArray);
            break;
        case beaver:
            var animalArray = getAnimalData("Beaver");
            displayAnimalIcon("Beaver", "6");
            buildQuestion(animalArray);
            break;
        default:
            document.write("Something went wrong!");
    }
}

// Build answer box
function buildAnswer(answer, animalArray, questionNum) {
    document.getElementById('userAnswerButtons').style.display = "none";
    document.getElementById('answerSection').style.display = "block";

    var correctAns = getAnswer(animalArray, questionNum);
    if ( answer === correctAns) {
        document.getElementById('answerBox').innerHTML = animalArray[questionNum][2];
    } else {
        document.getElementById('answerBox').innerHTML = animalArray[questionNum][3];
    }
}

// Build question box
function buildQuestion(animalArray) {
    document.getElementById('questionSection').style.display = "block";

    var questionNumber = getRandom(0, 4);
    var question = getQuestion(animalArray, questionNumber);

    document.getElementById('questionBox').innerHTML = question;

    var trueButton = document.getElementById('true');
    var falseButton = document.getElementById('false');
    trueButton.addEventListener('click', function() { buildAnswer(true, animalArray, questionNumber); });
    falseButton.addEventListener('click', function() { buildAnswer(false, animalArray, questionNumber); });
}

// Get random number for choosing question in 2D array
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate question
function getQuestion(animalArray, questionNum) {
    return animalArray[questionNum][0];
}

// Get answer
function getAnswer(animalArray, questionNum) {
    return animalArray[questionNum][1];
}

// Function to return the array for specific animal
function getAnimalData(animal) {
    switch(animal) {
        case "Raccoon":
            return q_raccoon;
            break;
        case "Opossum":
            return q_opossum;
            break;
        case "Groundhog":
            return q_groundhog;
            break;
        case "Bat":
            return q_bat;
            break;
        case "Skunk":
            return q_skunk;
            break;
        case "Beaver":
            return q_beaver;
            break;
        default:
            return "ERROR! Failure to return proper array.";
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
    [ "Raccoon babies are called \"Kits\"", true, "If correct", "If NOT correct" ],
    [ "Question 2 for raccoon", true, "If correct", "If NOT correct" ],
    [ "Question 3 for raccoon", true, "If correct", "If NOT correct" ],
    [ "Question 4 for raccoon", true, "If correct", "If NOT correct" ],
    [ "Question 5 for raccoon", true, "If correct", "If NOT correct" ]
]

var q_opossum = [
    [ "Question 1 for opossum", false, "If correct", "If NOT correct" ],
    [ "Question 2 for opossum", false, "If correct", "If NOT correct" ],
    [ "Question 3 for opossum", false, "If correct", "If NOT correct" ],
    [ "Question 4 for opossum", false, "If correct", "If NOT correct" ],
    [ "Question 5 for opossum", false, "If correct", "If NOT correct" ]
]

var q_bat = [
    [ "Question 1 for bat", true, "If correct", "If NOT correct" ],
    [ "Question 2 for bat", true, "If correct", "If NOT correct" ],
    [ "Question 3 for bat", true, "If correct", "If NOT correct" ],
    [ "Question 4 for bat", true, "If correct", "If NOT correct" ],
    [ "Question 5 for bat", true, "If correct", "If NOT correct" ]
]

var q_skunk = [
    [ "Question 1 for skunk", true, "If correct", "If NOT correct" ],
    [ "Question 2 for skunk", true, "If correct", "If NOT correct" ],
    [ "Question 3 for skunk", true, "If correct", "If NOT correct" ],
    [ "Question 4 for skunk", true, "If correct", "If NOT correct" ],
    [ "Question 5 for skunk", true, "If correct", "If NOT correct" ]
]

var q_beaver = [
    [ "Question 1 for beaver", true, "If correct", "If NOT correct" ],
    [ "Question 2 for beaver", true, "If correct", "If NOT correct" ],
    [ "Question 3 for beaver", true, "If correct", "If NOT correct" ],
    [ "Question 4 for beaver", true, "If correct", "If NOT correct" ],
    [ "Question 5 for beaver", true, "If correct", "If NOT correct" ]
]

var q_groundhog = [
    [ "Question 1 for groundhog", true, "If correct", "If NOT correct" ],
    [ "Question 2 for groundhog", true, "If correct", "If NOT correct" ],
    [ "Question 3 for groundhog", true, "If correct", "If NOT correct" ],
    [ "Question 4 for groundhog", true, "If correct", "If NOT correct" ],
    [ "Question 5 for groundhog", true, "If correct", "If NOT correct" ]
]