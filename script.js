
function rollDice() {
   const numOfDice = parseInt(document.getElementById("numOfDice").value, 10); 
   const diceResult = document.getElementById("diceResult");
   const diceImages = document.getElementById("diceImages");

   if (isNaN(numOfDice) || numOfDice <= 0) {
       diceResult.textContent = "Please enter a valid number of dice.";
       diceImages.innerHTML = "";
       return;
   }

   const values = [];
   const images = [];

   for (let i = 0; i < numOfDice; i++) {
       const value = Math.floor(Math.random() * 6) + 1;
       values.push(value);
       images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}"></img>`);
       
   }

   diceResult.textContent = `Dices: ${values.join(', ')}`;
   diceImages.innerHTML = images.join('');
}
