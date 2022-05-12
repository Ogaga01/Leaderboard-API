const generateScores = (_data) => {
  const scoresContainer = document.querySelector('#score-list');

  scoresContainer.innerHTML = '';

  _data.forEach((item) => {
    scoresContainer.innerHTML += `<li>${item.user}: ${item.score}</li>`;
  });
};

export default generateScores;