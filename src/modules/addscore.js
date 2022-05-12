function addScore() {
  const divC = document.createElement('div');
  divC.setAttribute('id', 'add-section-div');
  const addTitle = document.createElement('h2');
  addTitle.setAttribute('id', 'add-title');
  addTitle.innerHTML = 'Add your score';
  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  form.setAttribute('action', '#');
  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('id', 'name');
  name.setAttribute('placeholder', 'Your name');
  const score = document.createElement('input');
  score.setAttribute('type', 'text');
  score.setAttribute('id', 'score');
  score.setAttribute('placeholder', 'Your score');
  const submit = document.createElement('button');
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.setAttribute('id', 'submit-score');
  submit.innerHTML = "Submit"
  form.append(name, score, submit)
  divC.append(addTitle, form);
  return divC;
}

export default addScore;