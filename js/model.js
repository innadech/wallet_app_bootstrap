let transactionHistory = []
let incomeCategories = []
let outcomeCategories = []

let nextId = 1

const currentIncome = {
  amount: 0,
  category: '',
}
const currentOutcome = {
  amount: 0,
  category: '',
}

function creteTransactionFromIncome(income) {
  return {
    id: nextId++,
    type: 'income',
    amount: currentIncome.amount,
    category: currentIncome.category,
  }
}

function creteTransactionFromOutcome(outcome) {
  return {
    id: nextId++,
    type: 'outcome',
    amount: currentOutcome.amount,
    category: currentOutcome.category,
  }
}

function setAmountIncome(amount) {
  currentIncome.amount = amount
}
function setCategoryIncome(category) {
  currentIncome.category = category
}
function setAmountOutcome(amount) {
  currentOutcome.amount = amount
}
function setCategoryOutcome(category) {
  currentOutcome.category = category
}
function addTransactionnFromIncome(income) {
  const transaction = creteTransactionFromIncome(income)
  transactionHistory.push(transaction)
}
function addTransactionnFromOutcome(outcome) {
  const transaction = creteTransactionFromOutcome(outcome)
  transactionHistory.push(transaction)
}

function getSumAmountByType() {
  let amountIncome = 0
  let amountOutcome = 0
  transactionHistory.forEach(history => {
    if (history.type === 'income') {
      amountIncome += history.amount
    } else {
      amountOutcome += history.amount
    }
  })
  return [amountIncome, amountOutcome]
}

function createCategory(caption, type) {
  return {
    id: nextId++,
    caption: caption,
    type: type,
  }
}

function addCategoryIncome(caption, type) {
  const existingCategory = incomeCategories.find(
    category => category.caption === caption
  )
  if (existingCategory) {
    return
  }
  const category = createCategory(caption, type)
  incomeCategories.push(category)
}

function addCategoryOutcome(caption, type) {
  const existingCategory = outcomeCategories.find(
    category => category.caption === caption
  )
  if (existingCategory) {
    return
  }
  const category = createCategory(caption, type)
  outcomeCategories.push(category)
}

function getBalance() {
  const [incomeSum, outcomeSum] = getSumAmountByType()
  return incomeSum - outcomeSum
}

function removeTransactionById(id) {
  transactionHistory = transactionHistory.filter(
    transaction => transaction.id !== id
  )
}
function removeCategoryByIdIncome(id) {
  incomeCategories = incomeCategories.filter(category => category.id !== id)
}
function removeCategoryByIdOutcome(id) {
  outcomeCategories = outcomeCategories.filter(category => category.id !== id)
}
