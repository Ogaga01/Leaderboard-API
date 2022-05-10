function refreshTitle(){
    const divA = document.createElement('div');
    divA.setAttribute('id', 'ref-div');
    const reftitle = document.createElement('h4');
    reftitle.innerHTML = "Refresh Score";
    const refButton = document.createElement('button');
    refButton.setAttribute('id', 'ref-button');
    refButton.innerHTML = "Refresh"
    divA.appendChild(reftitle);
    divA.appendChild(refButton);
    return divA;
}

function displayScore(){
    const divB = document.createElement('div');
    divB.setAttribute('id', 'display');
    const para1 = document.createElement('p');
    para1.setAttribute('class', 'white');
    para1.innerHTML = "Julius: 70";
    const para2 = document.createElement('p');
    para2.setAttribute('class', 'black');
    para2.innerHTML = "Tega: 88";
    const para3 = document.createElement('p');
    para3.setAttribute('class', 'white');
    para3.innerHTML = "Vincent: 73";
    const para4 = document.createElement('p');
    para4.setAttribute('class', 'black');
    para4.innerHTML = "Bush: 79";
    const para5 = document.createElement('p');
    para5.setAttribute('class', 'white');
    para5.innerHTML = "Leonard: 97";
    const para6 = document.createElement('p');
    para6.setAttribute('class', 'black');
    para6.innerHTML = "Damian: 79";
    divB.appendChild(para1);
    divB.appendChild(para2);
    divB.appendChild(para3);
    divB.appendChild(para4);
    divB.appendChild(para5);
    divB.appendChild(para6);
    return divB
}

export {refreshTitle, displayScore}