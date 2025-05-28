function handleSetCategoryIncome(category) {
  setCategoryIncome(category)
}
function handleSetAmountIncome(amount) {
  setAmountIncome(+amount)
}
function handleSetCategoryOutcome(category) {
  setCategoryOutcome(category)
}
function handleSetAmountOutcome(amount) {
  setAmountOutcome(+amount)
}

function handleAddTransactionIncome() {
  addTransactionnFromIncome(income)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumIncome()
}
function handleAddTransactionOutcome() {
  addTransactionnFromOutcome(outcome)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumOutcome()
}
function handleRenderBalance() {
  const elBalance = getBalance()
  renderBalance(elBalance)
}
function handleRemoveTransaction(id) {
  removeTransactionById(+id)
  renderTransactionHistory(transactionHistory)
}

function handleAddOptionToSelectIncome(caption, type) {
  addCategoryIncome(caption, type)
  renderSelect(incomeCategories, type)
  renderInputAddOptionCategoryIncome()
  renderCategoriesList(incomeCategories)
  // saveCategory(category)
  // saveCategories()
}
function handleAddOptionToSelectOutcome(caption, type) {
  addCategoryOutcome(caption, type)
  renderSelect(outcomeCategories, type)
  renderInputAddOptionCategoryOutcome()
  renderCategoriesList(outcomeCategories)
  // saveCategory(category)
  // saveCategories()
}

function handleRemoveIncomeCategories(id, type) {
  removeCategoryByIdIncome(+id)
  renderCategoriesList(incomeCategories)
  renderSelect(incomeCategories, type)
}
function handleRemoveOutcomeCategories(id, type) {
  removeCategoryByIdOutcome(+id)
  renderCategoriesList(outcomeCategories)
  renderSelect(outcomeCategories, type)
}
