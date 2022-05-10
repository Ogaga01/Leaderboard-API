function addScore() {
  const divC = document.createElement('div');
  divC.setAttribute('id', 'add-section-div');
  const addTitle = document.createElement('h2');
  addTitle.setAttribute('id', 'add-title');
  addTitle.innerHTML = 'Add your score';
  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('id', 'name');
  name.setAttribute('placeholder', 'Your name');
  const score = document.createElement('input');
  score.setAttribute('type', 'text');
  score.setAttribute('id', 'score');
  score.setAttribute('placeholder', 'Your score');
  const submit = document.createElement('button');
  submit.innerHTML = 'Submit';
  submit.setAttribute('id', 'submit-score');
  divC.appendChild(addTitle);
  divC.appendChild(name);
  divC.appendChild(score);
  divC.appendChild(submit);
  return divC;
}

export default addScore;