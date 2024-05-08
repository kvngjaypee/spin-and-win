//Deposit some money
//Determine the number o flines to bet on
//Collect a bet amount
//Spin the slot amount
//Check the user status; win or lose!
//Give the user their winnings
//Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_vALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet ranging from 1-3: ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Sorry, that an invalid number of lines... Try again");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance) => {
  while (true) {
    const bet = prompt("Enter the total bet: ");
    const numberOfBet = parseFloat(bet);

    if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance) {
      console.log("Invalid bets... Try again");
    } else {
      return numberOfBet;
    }
  }
};
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
