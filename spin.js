//Deposit some money
//Determine the number o flines to bet on
//Collect a bet amount
//Spin the slot amount
//Check the user status; win or lose!
//Give the user their winnings
//Play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Deposit an amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Input a valid amount");
    } else {
      return numberDepositAmount;
    }
  }
};

const depositAmount = deposit();
console.log(depositAmount);
