const foodSet = [
    {   
        topic: 'Food',
        question: 'What is the most popular street food in Israel?',
        answers: ['Shawarma','Shakshuka', 'Falafel', 'Hummus'],
        rightAnswer: 'Hummus',
        questionImg: '',
        answerImg: ''
    },
    {
        topic: 'Food',
        question: 'Vodka is made from which vegetable?',
        answers: ['Potato','Mashroom', 'Onion', 'Cucumber'],
        rightAnswer: 'Potato',
        questionImg: '',
        answerImg: ''
    },
    {
        topic: 'Food',
        question: 'Which country did the french fries originate from?',
        answers: ['USA','Belgium', 'France', 'UK'],
        rightAnswer: 'Belgium',
        questionImg: '',
        answerImg: ''
    },
    {
        topic: 'Food',   
        question: 'Which food contains the most calories per gram?',
        answers: ['Pistachio','Chia seeds', 'Chocolate', 'Avocado'],
        rightAnswer: 'Avocado',
        questionImg: '',
        answerImg: ''
    }
];

const sportSet = [
    {
        topic: 'Sport',
        question: 'How many players are there in a soccer team?',
        answers: ['10','13', '9', '11'],
        rightAnswer: '11',
        questionImg: '',
        answerImg: ''
    },
    {

        topic: 'Sport',
        question: 'What distance do marathon participants run?',
        answers: ['20,195 kilometres','42,195 kilometres', '41,195 kilometres', '21,195 kilometres'],
        rightAnswer: '42,195 kilometres',
        questionImg: '',
        answerImg: ''
    },
    {

        topic: 'Sport',
        question: 'What height is a regulation NBA basket?',
        answers: ['3.07 meters','3.12 meters', '3.02 meters', '3.04 meters'],
        rightAnswer: '3.02 meters',
        questionImg: '',
        answerImg: ''
    },
    {

        topic: 'Sport',
        question: 'What game is called the “sport of kings”?',
        answers: ['Chess','Triathlon', 'Running', 'Boxing'],
        rightAnswer: 'Chess',
        questionImg: '',
        answerImg: ''
    }
];

const otherSet = [
    {
        topic: 'General',
        question: 'What is the largest planet in the solar system?',
        answers: ['Venus','Mars', 'Neptune', 'Jupiter'],
        rightAnswer: 'Jupiter',
        questionImg: '',
        answerImg: ''
    },
    {

        topic: 'General',
        question: 'How many bones are in the human body?',
        answers: ['212','216', '204', '206'],
        rightAnswer: '206',
        questionImg: '',
        answerImg: ''
    },
    {

        topic: 'General',
        question: 'In which year did the Titanic sink?',
        answers: ['1912','1921', '1924', '1914'],
        rightAnswer: '1912',
        questionImg: '',
        answerImg: ''
    },
    {

        topic: 'General',
        question: 'What is the chemical symbol for Gold?',
        answers: ['Ag','Au','Go','Gd'],
        rightAnswer: 'Au',
        questionImg: '',
        answerImg: ''
    }
];


//this is the 3 pages---------

const body = document.querySelector('body');
const page1 = document.querySelector('.start');
const page2_1 = document.querySelector('.S-container');
const page2_2 = document.querySelector('.L-container');
const page3 = document.querySelector('.q-box');
const categories = document.querySelectorAll('.card');

//this is the 3 categories-----------


//the 3 parts of q page (num3)-----------

const part1 = document.querySelector('.question');
//// add span & add h2
let TopicP1 = document.createElement('span');
TopicP1.classList.add('score');
let questionP1 = document.createElement('h2');
//
const part2 = document.querySelector('.answers');
//// add 4 btn with opt answer
//*4
let btnAnswers = document.createElement('button');
//
const part3 = document.querySelector('.options');
//// add btn 'next' span with scoreT btn 'skip'
let btnNext = document.createElement('button');
btnNext.classList.add('next');
let scoreT = document.createElement('span');
let btnSkip = document.createElement('button');
btnSkip.classList.add('skip');
//
const divFinal = document.createElement('div');

//

// needed
let numQ = 0;
let currScore = 0;

// let respons = document.createElement('h4');


//adding relevent classes -up-

//append

//---p1---
page1.textContent = 'Click To Start';
page1.classList.add('start');
body.append(page1);

//---p2---half1
const bigTitle = document.createElement('h1');
bigTitle.innerText = 'The big Questionnaire';
page2_1.append(bigTitle);

const pickTitle = document.createElement('h2');
pickTitle.innerText = "Let's test how much you know, pick category";
page2_1.append(pickTitle);

//

//apenned to page 3
btnNext.innerText = 'Next';
scoreT.innerText = Your current score is ${currScore}%;
btnSkip.innerText = 'Skip';

part3.append(btnNext);
part3.append(scoreT);
part3.append(btnSkip)

TopicP1.innerText = 'Sport';
questionP1.innerText = 'did it worked?';

part1.append(TopicP1);
part1.append(questionP1);

// for(let i = 0; i < 4; i++){
//     let btnAnswers5 = document.createElement('button');

//     btnAnswers5.innerText = answer number ${i};
//     part2.append(btnAnswers5);
// };


// ----------------------------------------func--------------------------------------

// array for hiding

function Questionnaire () {
    console.log(divFinal);
    numQ = 0;
    currScore = 0;
    userPick = '';

    while(divFinal.childElementCount>0){
        divFinal.removeChild(divFinal.firstElementChild);
    };

    body.removeChild(divFinal);
    const arrayHide = [page1, page2_1, page2_2, page3];

    arrayHide.forEach((p)=>{
        console.log(p);
            p == page3 ? p.classList.add('hide') : p.classList.remove('hide');
    })
    console.log('status');
    page1.addEventListener('click', startPage1);

}

//page1
function startPage1 () {
    page1.classList.add('hide')
    return page1.removeEventListener('click', startPage1)
}

page1.addEventListener('click', startPage1);



//page2
let userPick;
function pickCategory (e) {

    let category = e.target.classList;
    category.contains('a') ? userPick = sportSet : category.contains('b') ? userPick = otherSet : userPick = foodSet;
    page2_1.classList.add('hide');
    page2_2.classList.add('hide');
    page3.classList.remove('hide');
    console.log(e);
    console.log(e.target);
    console.log(e.target.classList);
    console.log(userPick, ${userPick});
    return changeQuestion();
}

categories.forEach((category)=> {
    category.addEventListener('click', pickCategory);
})

//page3
function changeQuestion () {
    //page3.classList.remove('hide');
    TopicP1.innerText = userPick[numQ]['topic'];
    questionP1.innerText = userPick[numQ]['question'];

    // for(let j = 0; j < 4; j++){
        
    //     let btnAnswers = document.createElement('button');
        
    //     btnAnswers.innerText = userPick[numQ]['answers'];
    //     part2.append(btnAnswers);
    //     btnAnswers.addEventListener('click',checkQuestion);
    // }
    
    // console.log(part2.childElementCount);
    // console.log(part2.firstChild);

    while(part2.childElementCount>0){
        part2.removeChild(part2.firstElementChild);
    };

    // console.log(part2.childElementCount);
    // console.log(part2.firstChild);
    
    userPick[numQ].answers.forEach(answer=>{
        
        let btnAnswer = document.createElement('button');
        
        btnAnswer.innerText = answer;
        part2.append(btnAnswer);
        btnAnswer.addEventListener('click',checkQuestion);
        
    })

    btnSkip.addEventListener('click', skip);


    // numQ++;
    // numQ == 4 ? return console.log('topic completed') : return changeQuestion();
}

// skip btn listener func
// btnSkip.addEventListener('click', skip);
// ()=>{
//     console.log(numQ);
//     numQ++;
//     console.log(numQ);
//     return numQ === 4 ? finalscore() : changeQuestion();
// });

function skip () {
    console.log(numQ);
    numQ++;
    console.log(numQ);
    return numQ === 4 ? finalscore() : changeQuestion();
}

function next () {
    console.log(numQ);
    numQ++;
    console.log(numQ);
    btnNext.removeEventListener('click', next);
    return numQ === 4 ? finalscore() : changeQuestion();
}


function checkQuestion (e) {

    // numQ--;
    let respons = document.createElement('h4');

    // e.target.innerText === userPick[numQ]['rightAnswer'] ? e.target.classList.add('r') : e.target.classList.add('f');
    // e.target.innerText === userPick[numQ]['rightAnswer'] ? currScore += 25 : currScore;
    // e.target.innerText === userPick[numQ]['rightAnswer'] ? respons.classList.add('res-r') : respons.classList.add('res-f');

    
    document.querySelectorAll('.answers button').forEach((ans)=>{
        ans.removeEventListener('click', checkQuestion);
    });
    
    
    if(e.target.innerText === userPick[numQ]['rightAnswer']){
        e.target.classList.add('t');
        respons.classList.add('res-t');
        respons.innerText = 'currect! good job';
        currScore += 25;
    }
    else{
        e.target.classList.add('f');
        respons.classList.add('res-f');
        respons.innerText = 'Wrong.. maybe next time';
    }

    part2.append(respons);

    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
    console.log(userPick[numQ]['rightAnswer']);
    

    scoreT.innerText = " Your current score is ${currScore}% ";

    console.log(currScore);
    console.log(scoreT);
    console.log(scoreT.innerText);

    console.log(part2);
    console.log(part2.childNodes);
    console.log(part2.hasChildNodes());
    // console.log(part2.firstChild);
    console.log(part2.firstChild);
    console.log(part2.firstElementChild);
    // console.log(part2.removeChild());
    console.log(Boolean(part2.children));

    
    btnSkip.removeEventListener('click', skip);

    btnNext.addEventListener('click', next);

    // btnNext.addEventListener('click', ()=>{
    //     console.log(numQ);
    //     numQ++;
    //     console.log(numQ);
    //     btnNext.removeEventListener('click', next);
    //     return numQ === 4 ? finalscore() : changeQuestion();
    // });
}


function finalscore () {

    page3.classList.add('hide');

    // const divFinal = document.createElement('div');
    divFinal.classList.add('q-box');
    divFinal.classList.add('finaldiv');

    const tFinal = document.createElement('h1');
    tFinal.classList.add('final');
    tFinal.innerText = Your final score is;
    
    const btnStartAgain = document.createElement('button');
    btnStartAgain.classList.add('final');
    btnStartAgain.innerText = 'Start again';

    const tScore = document.createElement('h1');
    tScore.innerText = ${currScore}%;
    tScore.style.scale = 0.7;


    divFinal.append(tFinal);
    divFinal.append(tScore);
    divFinal.append(btnStartAgain);
    body.prepend(divFinal);

    btnStartAgain.addEventListener('click', Questionnaire);
};





















/* function createQuestionEl(q) {
// המעטפת של כל השאלה
const newDiv = document.createElement('div');
document.append(newDiv);
// we've prepared class styled .question in CSS
newDiv.classList.add('question');

// טקסט השאלה
const qDiv = document.createElement('div');
qDiv.innerText = q.question;
newDiv.append(qDiv);

// תשובות
q.answers.forEach((ans,)) */