function onClickInputBadgeRemoveTransaction(e) {
  const elId = e.target.parentElement.getAttribute('data-id')
  console.log(elId)
  handleRemoveTransaction(elId)
  handleRenderBalance()
}
function onclickInputBadgeRemoveCategory(e) {
  const id = e.target.parentElement.getAttribute('data-id')
  const type = e.target.parentElement.getAttribute('data-type')
  console.log(id)
  console.log(type)
  if (type === 'income') {
    handleRemoveIncomeCategories(id, type)
  } else {
    handleRemoveOutcomeCategories(id, type)
  }
}
function onChangeSelectIncome(e) {
  const categoryCaption = e.target.value
  console.log(categoryCaption)
  handleSetCategoryIncome(categoryCaption)
}

function onInputInputIncome(e) {
  const transactionAmount = e.target.value
  handleSetAmountIncome(transactionAmount)
}
function onChangeSelectOutcome(e) {
  const categoryCaption = e.target.value
  console.log(categoryCaption)
  handleSetCategoryOutcome(categoryCaption)
}

function onInputInputOutcome(e) {
  const transactionAmount = e.target.value
  handleSetAmountOutcome(transactionAmount)
}

function onClickButtonAddOptionIncome() {
  const elInput = document.querySelector('#addOptionIncomeInput')
  const caption = elInput.value
  const type = 'income'
  if (elInput.value === '') return
  handleAddOptionToSelectIncome(caption, type)
}
function onClickButtonAddOptionOutcome() {
  const elInput = document.querySelector('#addOptionExpenseInput')
  const caption = elInput.value
  const type = 'outcome'
  if (elInput.value === '') return
  handleAddOptionToSelectOutcome(caption, type)
}

function onClickButtonAddTransactionIncome() {
  const elSelect = document.querySelector('#income')
  const selectedOption = elSelect.options[elSelect.selectedIndex]
  const selectName = elSelect.name
  console.log(selectedOption)
  console.log(selectName)
  const elInput = document.querySelector('#incomeamount')
  if (selectedOption.disabled) {
    elSelect.style.border = '2px solid red'
    return
  } else {
    elSelect.style.border = ''
  }
  if (elInput.value === '' || +elInput.value === 0) {
    elInput.style.border = '2px solid red'
    return
  } else {
    elInput.style.border = ''
  }
  handleAddTransactionIncome(selectedOption.value, selectName)
  handleRenderBalance()
}
function onClickButtonAddTransactionOutcome() {
  const elSelect = document.querySelector('#outcome')
  const selectedOption = elSelect.options[elSelect.selectedIndex]
  console.log(selectedOption)
  const selectName = elSelect.name
  console.log(selectName)
  // const elInput = document.querySelector('#expenseamount')

  // const validSelect = !elSelectedOption.disabled
  // const validInput = !!+elInput.value
  // renderSelectRedExpense()
  // renderInputRedExpense()
  handleAddTransactionOutcome(selectedOption.value, selectName)

  handleRenderBalance()
}
