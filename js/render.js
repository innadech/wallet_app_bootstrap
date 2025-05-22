function renderCategory(categories) {
  const elems = {
    income: document.querySelector('#container-income-list'),
    expense: document.querySelector('#container-outcome-list'),
  }
  elems.income.innerHTML = ''
  elems.expense.innerHTML = ''
  for (const category of categories) {
    const elLi = generateLiCategory(category)
    elems[category.type].appendChild(elLi)
    console.log(elems[category.type])
  }
}
function renderSpanIncome(number) {
  const elSpan = document.querySelector('#balance')
  elSpan.innerHTML = 'Balance' + ':' + '$' + number
}
function renderTransactionHistory(transactions) {
  const elTransactionHistory = document.querySelector('#transaction-history')
  elTransactionHistory.innerHTML = ''
  for (const transaction of transactions) {
    if (transaction.type === 'income') {
      const elGenerateIncome = generateLiTransaction(transaction)
      elTransactionHistory.appendChild(elGenerateIncome)
    } else {
      const elGenerateExpense = generateLiTransaction(transaction)
      elTransactionHistory.appendChild(elGenerateExpense)
    }
  }
}

function renderSelect(categories, type) {
  // const elSelect = document.querySelector('#income') // type
  const elSelect = document.querySelector('#' + type) // type
  elSelect.innerHTML = ''
  const elIncomeOptionSelected = generateOptionSelected()
  elSelect.appendChild(elIncomeOptionSelected)
  for (const category of categories) {
    if (category.type === type) {
      const elIncomeOption = generateOption(category)
      elSelect.appendChild(elIncomeOption)
    }
  }
}
function renderInputAddOptionCategoryIncome() {
  const elInput = document.querySelector('#addOptionIncomeInput')
  elInput.value = ''
}
function renderInputAddOptionCategoryExpense() {
  const elInput = document.querySelector('#addOptionExpenseInput')
  elInput.value = ''
}

function renderInputAddSumIncome() {
  const elInput = document.querySelector('#incomeamount')
  elInput.value = ''
}
function renderInputAddSumExpense() {
  const elInput = document.querySelector('#expenseamount')
  elInput.value = ''
}
