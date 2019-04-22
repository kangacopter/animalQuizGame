// Function to build the question display (question, buttons for true false)
function displayQuestion(animal) {
  // Show Q icon, back button, remove menu
  document.getElementById("chooseAnimal").style.display = "none";
  document.getElementById("headerTitle").style.display = "none";
  document.getElementById("goBackButton").style.display = "block";

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
  document.getElementById("userAnswerButtons").style.display = "none";
  document.getElementById("answerSection").style.display = "block";

  var correctAns = getAnswer(animalArray, questionNum);
  if (answer === correctAns) {
    document.getElementById("answerBox").innerHTML =
      '<p class="correctColor">CORRECT!</p>' + animalArray[questionNum][2];
  } else {
    document.getElementById("answerBox").innerHTML =
      '<p class="incorrectColor">INCORRECT!</p>' + animalArray[questionNum][2];
  }
}

// Build question box
function buildQuestion(animalArray) {
  document.getElementById("questionSection").style.display = "block";

  var questionNumber = getRandom(0, 4);
  var question = getQuestion(animalArray, questionNumber);

  document.getElementById("questionBox").innerHTML = question;

  var trueButton = document.getElementById("true");
  var falseButton = document.getElementById("false");
  trueButton.addEventListener("click", function() {
    buildAnswer(true, animalArray, questionNumber);
  });
  falseButton.addEventListener("click", function() {
    buildAnswer(false, animalArray, questionNumber);
  });
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
  switch (animal) {
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
  document.getElementById("animalIconQuestion").style.display = "block";
  document.getElementById("currentAnimalQ").innerHTML = animal;
  document.getElementById("currentAnimalIcon").innerHTML =
    '<img src="' +
    animalIcons[parseInt(num) - 1] +
    '" alt="The head of a cute ' +
    animal.toLowerCase() +
    '".">';
  document.getElementById("currentAnimalNum").innerHTML = num;
}

// Collection of animal icons
var animalIcons = [
  "img/raccoonIcon.svg",
  "img/opossumIcon.svg",
  "img/groundhogIcon.svg",
  "img/batIcon.svg",
  "img/skunkIcon.svg",
  "img/beaverIcon.svg"
];

// Collection of animal question arrays
var q_raccoon = [
  [
    'Raccoon babies are called "Kits."',
    true,
    'Raccoon babies are indeed called "kits"'
  ],
  [
    "Raccoons are nocturnal.",
    true,
    "Raccoons are indeed nocturnal, meaning they are mostly active at night."
  ],
  [
    "Raccoons closest animal relative is the common housecat.",
    false,
    "Raccoons are most closely related to the Ring-tailed Cat."
  ],
  [
    "Raccoons have opposable thumbs, like humans do.",
    false,
    "Raccoons have paws that are similar to human hands, but they do not have opposable thumbs."
  ],
  [
    "Young raccoons stay with their mothers for 1 month.",
    false,
    "Young can raccoons stay with their mothers for up to a year!"
  ]
];

var q_opossum = [
  [
    "Opossums are the only marsupial native to Kentucky.",
    true,
    "Opossums are the only marsupial native to Kentucky."
  ],
  ["Opossums live in large groups.", false, "Opossums live alone or in pairs."],
  [
    "Female opossums have 2 to 3 babies in a litter.",
    false,
    "Female opossums have 8 to 13 babies per litter!"
  ],
  [
    "Opossums can eat 5000 ticks in one season.",
    true,
    "Opossums eat up to 5000 ticks each season, helping to combat Lyme disease"
  ],
  [
    'Baby opossums are called "pups".',
    false,
    'Baby opossums are called "joeys", similarly to kanagaroos, fellow marsupials.'
  ]
];

var q_bat = [
  ["Bats are flying rodents.", false, "Bats are flying mammals!"],
  [
    "All bats drink blood.",
    false,
    "Only few species of bat drink blood. The Brown Bat found in Kentucky is an insectivore, meaning it eats bugs like mosquitoes and moths!"
  ],
  [
    "In the wild, bats live up to 19 years.",
    true,
    "Wild bats can survive for up to 19 years!"
  ],
  [
    "The brown bat is the type of bat most commonly found in Kentucky.",
    true,
    "The Brown Bat the most common bat species native to Kentucky."
  ],
  [
    "Most bats in Kentucky have 4 babies at one time.",
    false,
    "Most bats in Kentucky only have one pup a year!"
  ]
];

var q_skunk = [
  [
    "Skunks are carnivores.",
    false,
    "Skunks are omnivores and eat both plants and small prey, such as: insects, earthworms, rodents, lizards, eggs, berries, grass, and more. "
  ],
  [
    "Skunks quickly use their spray when they feel threatened.",
    false,
    "Skunks try to preserve their supply of spray chemical, as it is a limited resource. Instead, they will attempt to hiss, stomp, and display threatening poses before resorting to spraying a threat."
  ],
  [
    "Skunks are common in suburban areas.",
    true,
    "True! Skunks are quite often found in suburban areas."
  ],
  [
    "Skunks are most often hunted by wolves, foxes, and badgers.",
    false,
    "False! These predators often avoid the skunk, knowing of its foul potential. The most common predator of skunk is the great horned owl."
  ],
  [
    "Honeybees are lethal to skunks.",
    false,
    "Skunks quite like the taste of honeybees, and their thick fur protects them from stings."
  ]
];

var q_beaver = [
  [
    "Beavers are the largest rodent species.",
    false,
    "False. Beavers are the second largest rodent, second to their capybara cousins."
  ],
  [
    "Beavers' teeth are always growing.",
    true,
    "True! Beaver teeth constantly grow so that they do not wear down when they chew wood."
  ],
  [
    "Beavers can live up to 3 years in the wild.",
    false,
    "False... beavers can live up to 24 years in the wild!"
  ],
  [
    "A beaver only maintains one dam for protection and food storage.",
    false,
    'False, beavers often create more than one dam in an area and around their homes, which are called "lodges".'
  ],
  [
    "Beavers are monogamous and pair up for life.",
    true,
    "True, mated beaver pairs stay together and also raise their young together."
  ]
];

var q_groundhog = [
  [
    "Groundhogs are sometimes called Woodchucks.",
    true,
    '"Woodchuck" is another term for groundhogs.'
  ],
  [
    "Groundhogs hibernate from late October through late February.",
    true,
    "Groundhogs usually hibernate from late October through late February."
  ],
  [
    "Groundhogs yell when they are threatened.",
    false,
    'Groundhogs make a whistle-like sound when threatened, earning them the nickname of "Whistle Pig".'
  ],
  [
    "Groundhogs can run very fast.",
    false,
    "Groundhogs are slow on land, but are great diggers, climbers, and swimmers."
  ],
  [
    "Groundhogs chew on sticks, leaves, and tree bark because it tastes good to them.",
    false,
    "Perhaps they also taste good, but they chew on sticks, leaves, and tree bark to keep their teeth from getting too long!"
  ]
];
