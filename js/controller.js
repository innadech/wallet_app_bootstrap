function handleSetCategoryIncome(category) {
  setCategoryIncome(category)
}
function handleSetAmountIncome(amount) {
  setAmountIncome(+amount)
}
function handleSetCategoryExpense(category) {
  setCategoryExpense(category)
}
function handleSetAmountExpense(amount) {
  setAmountExpense(+amount)
}

function handleAddTransactionIncome() {
  addTransactionnFromIncome(income)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumIncome()
}
function handleAddTransactionExpense() {
  addTransactionnFromExpense(expense)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumExpense()
}
function handleRenderSpanIncome() {
  const elBalance = getBalance()
  renderSpanIncome(elBalance)
}
function handleRemoveTransaction(id) {
  removeTransactionById(+id)
  renderTransactionHistory(transactionHistory)
}

function handleAddOptionToSelectIncome(caption, type) {
  addCategoryIncome(caption, type)
  renderSelect(incomeCategories, type)
  renderInputAddOptionCategoryIncome()
  renderCategory(incomeCategories)
  // saveCategory(category)
  // saveCategories()
}
function handleAddOptionToSelectExpense(caption, type) {
  addCategoryExpense(caption, type)
  renderSelect(expenseCategories, type)
  renderInputAddOptionCategoryExpense()
  renderCategory(expenseCategories)
  // saveCategory(category)
  // saveCategories()
}

function handleRemoveIncomeCategories(id, type) {
  removeCategoryByIdIncome(+id)
  renderCategory(incomeCategories)
  renderSelect(incomeCategories, type)
}
function handleRemoveExpenseCategories(id, type) {
  removeCategoryByIdExpense(+id)
  renderCategory(expenseCategories)
  renderSelect(expenseCategories, type)
}
