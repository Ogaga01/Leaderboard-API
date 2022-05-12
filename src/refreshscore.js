function refreshTitle() {
  const divA = document.createElement('div');
  divA.setAttribute('id', 'ref-div');
  const reftitle = document.createElement('h2');
  reftitle.innerHTML = 'Refresh Score';
  const refButton = document.createElement('button');
  refButton.setAttribute('id', 'ref-button');
  refButton.innerHTML = 'Refresh';
  divA.appendChild(reftitle);
  divA.appendChild(refButton);
  return divA;
}

function displayScore() {
  const divB = document.createElement('div');
  divB.setAttribute('id', 'display');
  const list = document.createElement('ul');
  list.setAttribute('id', 'score-list');
  divB.appendChild(list);
}

export { refreshTitle, displayScore };