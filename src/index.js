import './style.css';
import { refreshTitle } from './refreshscore.js';
import { displayScore } from './refreshscore.js';
import { addScore } from './styles/addscore.js';

const body = document.querySelector('body');
const header = document.createElement('header');
const title = document.createElement('h1');
title.innerHTML= "Leaderboard";
header.appendChild(title);
body.appendChild(header)
const main = document.createElement('main');
body.appendChild(main);
const divD = document.createElement('div');
divD.setAttribute('id', 'main-div');
const refreshSection = document.createElement('section');
refreshSection.setAttribute('id', 'ref-section');
const addScoreSection = document.createElement('section');
addScoreSection.setAttribute('id', 'add-section');
divD.appendChild(refreshSection);
divD.appendChild(addScoreSection);
main.appendChild(divD)
refreshSection.appendChild(refreshTitle());
refreshSection.appendChild(displayScore());
addScoreSection.appendChild(addScore());