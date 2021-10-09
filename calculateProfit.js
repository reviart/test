// standard 'readline' boilerplate
const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// new function that promises to ask a question and 
// resolve to its answer
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, (input) => resolve(input) );
  });
}

// launch your program since `await` only works inside `async` functions
start()

// use promise-based `ask` function to ask several questions
// in a row and assign each answer to a variable
async function start() {
  try {
    let totalInvest = await ask("Total invest = ") || 0
    let buy = await ask("Price buy = ")
    let sell = await ask("Price sell = ")

    buy = buy.replace(/\./g, '')
    sell = sell.replace(/\./g, '')

    const profit = sell - buy
    const percentage = ((profit/buy)*100).toFixed(2)
    console.log(`Profit percentage = ${percentage}%`)

    if (totalInvest !== 0) {
      totalInvest = totalInvest.replace(/\./g, '')
      totalInvest = +totalInvest
      const profitInvest = (totalInvest*percentage)/100
      const totalIncome = profitInvest + totalInvest

      console.log('Total profit =', profitInvest)
      console.log('Total income =', totalIncome)
    }

    process.exit()
  } catch (error) {
    console.log(error);
    process.exit()
  }
}
