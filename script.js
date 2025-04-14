const timerElement = document.getElementById('timeLeft');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');

// Question bank
const questions = [
  {
    question: 'Which of the following ensures that a web page looks good on all devices?',
    options: [' AJAX', 'Responsive Design', 'CMS', 'REST API'],
    answer: 'Responsive Design',
  },
  {
    question:
      'Which HTML tag is used to include JavaScript in a web page?',
    options: ['<js>', '<javascript>', '<script>', '<code>'],
    answer: '<script>',
  },
  {
    question: 'Which HTTP status code means "Not Found"?',
    options: ['200', '301', '403', '404'],
    answer: '404',
  },
  {
    question: 'Which HTML5 element is used for navigation links?',
    options: ['<nav>', '<link>', '<menu>', '<href>'],
    answer: '<nav>',
  },
  {
    question:
      'Which country is famous for the Great Pyramid of Giza?',
    options: ['Mexico', 'Egypt', 'India', 'Greece'],
    answer: 'Egypt',
  },
  {
    question: 'What is the capital city of Canada?',
    options: ['Toronto', 'Montreal', 'Ottawa', ' Vancouver'],
    answer: 'Ottawa',
  },
  {
    question: 'Which country has won the most FIFA World Cup titles in men football?',
    options: ['  Brazil', 'Italy', 'Germany', 'Argentina'],
    answer: ' Brazil',
  },
  {
    question: 'Which popular drink is made from fermented grapes?',
    options: ['Whiskey', 'Wine', 'Beer', 'Vodka'],
    answer: 'Wine',
  },
  {
    question: 'Who holds the record for the most Olympic gold medals?',
    options: [' Michael Phelps', ' Simone Biles', ' Carl Lewis', ' Usain Bolt'],
    answer: ' Michael Phelps',
  },
  {
    question: 'Which herb is commonly used in pesto sauce?',
    options: ['Cilantro', 'Basil', 'Parsley', 'Thyme'],
    answer: 'Basil',
  },
];

let index = 0;
let score = 0;
let timmerLeft = 15;
let timmer;

function starTimmer() {
  timmer = setInterval(() => {
    timmerLeft--;
    timerElement.textContent = timmerLeft;
    if (timmerLeft === 0) {
      clearInterval(timmer);
      alert('Times Up');
    }
  }, 1000);
}

function changeProgressBar() {
  progressElement.style.width = `${index * 10}%`;
}

function endQuiz() {
  questionElement.textContent = 'Quiz Over';
  optionsElement.innerHTML = '';
  timerElement.textContent = '';
  scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
}

function moveToNextQuestion() {
  clearInterval(timmer);
  index++;
  if (index < questions.length) {
    timmerLeft = 15;
    startQuiz();
  } else {
    endQuiz();
  }
}

function handleAnswer(selectedAnswer) {
  if (selectedAnswer === questions[index].answer) {
    score++;
  }
  moveToNextQuestion();
  changeProgressBar();
}

function displayCurrentQuestion() {
  questionElement.innerHTML = '';
  const currentQuestion = document.createElement('h4');
  currentQuestion.textContent = questions[index].question;
  questionElement.appendChild(currentQuestion);

  optionsElement.innerHTML = '';
  questions[index].options.forEach((option) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = option;
    buttonElement.addEventListener('click', () => {
      handleAnswer(option);
    });
    optionsElement.appendChild(buttonElement);
  });
  scoreElement.textContent = `Score: ${score}`;
}

function startQuiz() {
  displayCurrentQuestion();
  starTimmer();
}
startQuiz();