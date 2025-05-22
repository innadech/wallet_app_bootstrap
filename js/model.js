let transactionHistory = []
let categories = []
let incomeCategories = []
let expenseCategories = []

let nextId = 1

const income = {
  amount: 0,
  category: '',
}
const expense = {
  amount: 0,
  category: '',
}

function creteTransactionFromIncome(income) {
  return {
    id: nextId++,
    type: 'income',
    amount: income.amount,
    category: income.category,
  }
}

function creteTransactionFromExpense(expense) {
  return {
    id: nextId++,
    type: 'expense',
    amount: expense.amount,
    category: expense.category,
  }
}

function setAmountIncome(amount) {
  income.amount = amount
}
function setCategoryIncome(category) {
  income.category = category
}
function setAmountExpense(amount) {
  expense.amount = amount
}
function setCategoryExpense(category) {
  expense.category = category
}
function addTransactionnFromIncome(income) {
  const transaction = creteTransactionFromIncome(income)
  transactionHistory.push(transaction)
}
function addTransactionnFromExpense(expense) {
  const transaction = creteTransactionFromExpense(expense)
  transactionHistory.push(transaction)
}

function getSumAmountByType() {
  let amountIncome = 0
  let amountExpense = 0
  transactionHistory.forEach(history => {
    if (history.type === 'income') {
      amountIncome += history.amount
    } else {
      amountExpense += history.amount
    }
  })
  return [amountIncome, amountExpense]
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

function addCategoryExpense(caption, type) {
  const existingCategory = expenseCategories.find(
    category => category.caption === caption
  )
  if (existingCategory) {
    return
  }
  const category = createCategory(caption, type)
  expenseCategories.push(category)
}

function getBalance() {
  const [incomeSum, expenseSum] = getSumAmountByType()
  return incomeSum - expenseSum
}

function removeTransactionById(id) {
  transactionHistory = transactionHistory.filter(
    transaction => transaction.id !== id
  )
}
function removeCategoryByIdIncome(id) {
  incomeCategories = incomeCategories.filter(category => category.id !== id)
}
function removeCategoryByIdExpense(id) {
  expenseCategories = expenseCategories.filter(category => category.id !== id)
}
