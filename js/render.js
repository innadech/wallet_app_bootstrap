function renderCategoriesList(categories) {
  const categoryType = categories[0].type
  const elems = {
    income: document.querySelector('#container-income-list'),
    outcome: document.querySelector('#container-outcome-list'),
  }
  elems[categoryType].innerHTML = ''
  for (const category of categories) {
    const elLi = generateLiCategory(category)
    elems[categoryType].appendChild(elLi)
    console.log(category.type)
  }
}
function renderBalance(number) {
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
      const elGenerateOutcome = generateLiTransaction(transaction)
      elTransactionHistory.appendChild(elGenerateOutcome)
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
function renderInputAddOptionCategoryOutcome() {
  const elInput = document.querySelector('#addOptionExpenseInput')
  elInput.value = ''
}

function renderInputAddSumIncome() {
  const elInput = document.querySelector('#incomeamount')
  elInput.value = ''
}
function renderInputAddSumOutcome() {
  const elInput = document.querySelector('#expenseamount')
  elInput.value = ''
}
