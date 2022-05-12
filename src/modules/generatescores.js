const scoresContainer = document.querySelector('#score-list');

const generateScores = (_data) => {
  container.innerHTML = '';

  _data.forEach((item) => {
    scoresContainer.innerHTML += `<li>${item.user}: ${item.score}</li>`;
  });
};

export default generateScores;