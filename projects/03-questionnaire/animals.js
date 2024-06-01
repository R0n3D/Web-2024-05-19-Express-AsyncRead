
let currentQuestionSet = [];
currentQuestionIndex = 0;
let userScore = 0;
const q1 = {
    
    question: 'Does elephant is frightened by mice?',
    answers: ['Yes','Sometimes', 'Only in the Zoo',  'No'],
    rightAnswer: 'Yes',
    questionImg: './img/elefant.gif',
    answerImg: ''
}
const q2 = {

    question: 'Which animal has 2 legs?',
    answers: ['Kangaroo','Shark', 'Spider',  'Cat'],
    rightAnswer: 'Kangaroo',
    questionImg: '',
    answerImg: ''
}
const q3 = {
    
    question: 'Who hunts at night?',
    answers: ['Lion','Lioness', 'Elefant',  'Mouse'],
    rightAnswer: 'Lioness',
    questionImg: '',
    answerImg: ''
}
const q4 = {
    question: 'What is the most popular food in Israel?',
    answers: ['Falafel', 'Sushi', 'Pizza', 'Burger'],
    rightAnswer: 'Falafel',
    questionImg: '',
    answerImg: ''
};
const q5 = {
    question: 'What is the most popular dessert in Israel?',
    answers: ['Baklava', 'Ice Cream', 'Halva', 'Cheesecake'],
    rightAnswer: 'Halva',
    questionImg: '',
    answerImg: ''
};
const q6 = {
    question: 'What is a typical Israeli breakfast?',
    answers: ['Shakshuka', 'Pancakes', 'Omelette', 'Waffles'],
    rightAnswer: 'Shakshuka',
    questionImg: '',
    answerImg: ''
};
const q7 = {
    question: 'What is the capital of France?',
    answers: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    rightAnswer: 'Paris',
    questionImg: '',
    answerImg: ''
};
const q8 = {
    question: 'Which is the largest ocean?',
    answers: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    rightAnswer: 'Pacific',
    questionImg: '',
    answerImg: ''
};
const q9 = {
    question: 'Which continent is known as the "Dark Continent"?',
    answers: ['Africa', 'Asia', 'South America', 'Australia'],
    rightAnswer: 'Africa',
    questionImg: '',
    answerImg: ''
};

const animalSet = [q1, q2, q3];
const foodSet = [q4, q5, q6];
const geographySet  = [q7, q8, q9];

function startQuiz(questionSetName) {
    switch (questionSetName) {
        case 'animalSet':
            currentQuestionSet = animalSet;
            break;
        case 'foodSet':
            currentQuestionSet = foodSet;
            break;
        case 'geographySet':
            currentQuestionSet = geographySet;
            break;
        default:
            alert('Invalid question set!');
            return;
    }

    userScore = 0;
    currentQuestionIndex = 0;
    document.getElementById('question-set-container').style.display = 'none';

    const questionContainer = document.querySelector('.question');
    const questionText = questionContainer.querySelector('.text');
    const answerOptions = questionContainer.querySelectorAll('.answ');

    // Clear the previous question and answer options
    //questionText.textContent = '';
    answerOptions.forEach(option => {
        const answerText = option.querySelector('.answer-text');
        answerText.textContent = '';
    });

    questionContainer.style.display = 'block';
    displayQuestion();
}
function displayQuestion() {
    const questionContainer = document.querySelector('.question');
    const questionText = questionContainer.querySelector('.text');
    const answerOptions = questionContainer.querySelectorAll('.answ');
    const scoreContainer = document.getElementById('score-container');

    if (currentQuestionSet.length === 0) {
        questionContainer.style.display = 'none';
        scoreContainer.textContent = 'Score: 0';
    } else if (currentQuestionIndex < currentQuestionSet.length) {
        const question = currentQuestionSet[currentQuestionIndex];

        // Update the question text
        questionText.textContent = question.question;

        // Update the answer choices
        answerOptions.forEach((option, index) => {
            const answerText = option.querySelector('.answer-text');
            const answerInput = option.querySelector('input[type="radio"]');

            answerText.textContent = question.answers[index];
            answerInput.value = question.answers[index];
            answerInput.checked = false;
            scoreContainer.textContent = `Score: ${userScore}`; // Display the current score
        });
    } else {
        questionContainer.innerHTML = `You have completed the quiz with the score of ${userScore}!`;
    }
}

 

    function checkAnswer(selectedAnswer) {
        const currentQuestion = currentQuestionSet[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.rightAnswer) {
            userScore++;
        }
        currentQuestionIndex++;
        displayQuestion();
    }

    function skipQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function resetQuiz() {
        userScore = 0;
        currentQuestionIndex = 0;
        currentQuestionSet = [];
        document.getElementById('question-set-container').style.display = 'block';
        document.querySelector('.question').style.display = 'none';
        const scoreContainer = document.getElementById('score-container');
        scoreContainer.textContent = '';
    }