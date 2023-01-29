const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    
    const newDiv = document.createElement("div");
    
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.classList.add('cards')
  
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }

}

let selectedCards = [];
let cardsColor = [];
let counter = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  let selCard = event.target;
  let cardColor = selCard.classList[0];
  if (selCard.classList.contains('selected')){
    return;
  }
  if (selectedCards.length === 2){
    return;
  }
  //if (selCard === selectedCards[0]){
  //  return;
  //}
  if (selectedCards.length === 1){
    setTimeout(checkForMatch, 1000);
  }
  cardsColor.push(cardColor);
  selectedCards.push(selCard);
  selCard.style.backgroundColor = cardColor;
  selCard.classList.add('selected');
  

  function checkForMatch(){
  let firstCard = selectedCards[0];
  let secondCard = selectedCards[1];
  if (cardsColor[0] === cardsColor[1]){
    alert('You found a match!');
    counter ++;
    if (counter === 5){
      alert('You won!');
    }
  }
    else if(cardsColor[0] !== cardsColor[1]){
      firstCard.style.backgroundColor = '';
      secondCard.style.backgroundColor ='';
      firstCard.classList.remove('selected');
      secondCard.classList.remove('selected');
    }
    selectedCards = [];
    cardsColor = [];
  }
  console.log(counter);
}
  //console.log("you just clicked", event.target);


//// when the DOM loads
createDivsForColors(shuffledColors);

/* */