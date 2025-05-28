function generateLiCategory(category) {
  const elSpan = document.createElement('span')
  const elButton = document.createElement('button')
  elSpan.setAttribute('data-id', category.id)
  elSpan.setAttribute('data-type', category.type) // !!!
  elSpan.classList.add('badge')
  elSpan.classList.add('rounded-pill')
  elSpan.classList.add('text-bg-light')
  elButton.onclick = onclickInputBadgeRemoveCategory
  elSpan.textContent = category.caption
  elButton.setAttribute('type', 'button')
  elButton.setAttribute('aria-label', 'Close')
  elButton.classList.add('btn-close')
  elSpan.appendChild(elButton)
  return elSpan
}
function generateOptionSelected() {
  const elOption = generateOption({ caption: 'Choose' })
  elOption.setAttribute('hidden', '')
  elOption.setAttribute('disabled', '')
  elOption.setAttribute('selected', '')
  elOption.setAttribute('value', '')

  return elOption
}

function generateOption(category) {
  const elOption = document.createElement('option')
  elOption.textContent = category.caption
  return elOption
}

function generateLiTransaction(transaction) {
  const elLi = document.createElement('li')
  const elButton = document.createElement('button')
  elLi.setAttribute('data-id', transaction.id)
  elLi.classList.add(transaction.type)
  elLi.classList.add('list-group-item')
  if (transaction.type === 'income') {
    elLi.classList.add('list-group-item-success')
  } else elLi.classList.add('list-group-item-danger')

  elButton.classList.add('btn-close')
  elButton.setAttribute('type', 'button')
  elButton.setAttribute('aria-label', 'Close')
  elButton.onclick = onClickInputBadgeRemoveTransaction
  elLi.textContent = transaction.type + ' ' + '$' + transaction.amount
  elLi.appendChild(elButton)
  return elLi
}
