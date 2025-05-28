const elOutcomeButtonAdd = document.querySelector('#expenseadd')
const elIncomeButtonAdd = document.querySelector('#incomeadd')
const elButtonAddOptionIncome = document.querySelector('#addOptionIncomeButton')
const elButtonAddOptionExpense = document.querySelector(
  '#addOptionExpenseButton'
)
const elSelectIncome = document.querySelector('#income')
const elSelectExpense = document.querySelector('#outcome')
const elInputBoxIncome = document.querySelector('#incomeamount')
const elInputBoxExpense = document.querySelector('#expenseamount')

elSelectIncome.onchange = onChangeSelectIncome
elSelectExpense.onchange = onChangeSelectOutcome
elInputBoxIncome.oninput = onInputInputIncome
elInputBoxExpense.oninput = onInputInputOutcome

elOutcomeButtonAdd.onclick = onClickButtonAddTransactionOutcome
elIncomeButtonAdd.onclick = onClickButtonAddTransactionIncome
elButtonAddOptionIncome.onclick = onClickButtonAddOptionIncome
elButtonAddOptionExpense.onclick = onClickButtonAddOptionOutcome
