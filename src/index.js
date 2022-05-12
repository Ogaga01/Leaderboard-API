import './style.css';
import { fetchData, postData } from './modules/API.js';
import { refreshTitle, displayScore } from './modules/refreshscore.js';
import addScore from './modules/addscore.js';

const body = document.querySelector('body');
const header = document.createElement('header');
const title = document.createElement('h1');
title.innerHTML = 'Leaderboard';
header.appendChild(title);
body.appendChild(header);
const main = document.createElement('main');
body.appendChild(main);
const divD = document.createElement('div');
divD.setAttribute('id', 'main-div');
const refreshSection = document.createElement('section');
refreshSection.setAttribute('id', 'ref-section');
const addScoreSection = document.createElement('section');
addScoreSection.setAttribute('id', 'add-section');
divD.append(refreshSection, addScoreSection);
main.appendChild(divD);
refreshSection.append(refreshTitle(), displayScore());
addScoreSection.appendChild(addScore());

// Generate scores
fetchData();

// Add a score
const container = document.querySelector('#form');
const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');

container.onsubmit = (e) => {
  e.preventDefault();

  const name = inputName.value;
  const score = inputScore.value;
  postData(name, score);

  container.reset();
};

// Refresh button
const refreshButton = document.querySelector('#ref-button');

refreshButton.onclick = () => {
  fetchData();
};