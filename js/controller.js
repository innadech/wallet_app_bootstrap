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
function handleUpdateContainerIncome() {
  handleSetCategoryIncome('')
  handleSetAmountIncome(0)
  renderContainerIncomeAppender(incomeCategories, currentIncome)
}
function handleUpdateContainerOutcome() {
  handleSetCategoryOutcome('')
  handleSetAmountOutcome(0)
  renderContainerOutcomeAppender(outcomeCategories, currentOutcome)
}

function handleAddTransactionIncome() {
  addTransactionnFromIncome(currentIncome)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumIncome(0)
}
function handleAddTransactionOutcome() {
  addTransactionnFromOutcome(currentOutcome)
  renderTransactionHistory(transactionHistory)
  renderInputAddSumOutcome(0)
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
}
function handleAddOptionToSelectOutcome(caption, type) {
  addCategoryOutcome(caption, type)
  renderSelect(outcomeCategories, type)
  renderInputAddOptionCategoryOutcome()
  renderCategoriesList(outcomeCategories)
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
