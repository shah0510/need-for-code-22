const quizData = [
    {
        question: " Which is the world’s rarest big cat?",
        a: "Snow leopard",
        b: "Amur leopard",
        c: "Tiger",
        correct: "b",
    },
    {
        question: " Beagles belong to which group of dogs?",
        a: "Hounds",
        b: "Retrievers",
        c: "Pointers",
        correct: "a",
    },
    {
        question: " The Chihuahua breed is native to which country?",
        a: "Mexico",
        b: "France",
        c: "Bolivia",
        correct: "a",
    },
    {
        question: " How many whiskers does the average cat have on each side of its face?",
        a: "12",
        b: "3",
        c: "1",
        correct: "a",
    },
    {
        question: " Pugs used to be ruled by?",
        a: "Egyptian pharaohs",
        b: "Roman emperors",
        c: "Chinese emperors",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerE1 => answerEls.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected()
    console.log(ANS)
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/ ${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">SUBMIT</button>`
        }
    }
}
        
    )