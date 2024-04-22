
document.addEventListener("DOMContentLoaded", function () {
    let userName = prompt("Enter your name");
    if (userName) {
        document.getElementById("userName").innerHTML = ` USER :  ${userName}`;
    } else {
        document.getElementById("userName").innerHTML = `USER : Tester-1`;
    }
    document.getElementById("scoreContainer").textContent = "SCORE :";
    document.getElementById("resultContainer").textContent = "RESULT :";


    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
});

const correctAnswers = {
    correctAns1: "orange white green",
    correctAns2: "ontario",
    correctAns3: "7",
    correctAns4: "BMW",
    correctAns5: "15 Auguest 1947",
    correctAns6: "Narendra Modi",
    correctAns7: "12",
    correctAns8: "8",
    correctAns9: "Shaktikanta Das",
    correctAns10: "Red",
    correctAns11: "Oxygen",
    correctAns12: "William Shakespeare",
    correctAns13: "Diamond",
    correctAns14: "Jupiter",
    correctAns15: "1912"
};


function startQuizTimer() {document.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = false);

    window.quizSubmitted = false;

    alert("Time's starts now.");
    document.getElementById("quizStart").disabled = true;
    const quizTimer = setTimeout(() => {
        if (!window.quizSubmitted) {
            verifyAns(); 
            alert("Time's up! The quiz was submitted automatically.");
            document.getElementById("quizStart").innerHTML = "Start";
        }
    }, 60000);  
    document.getElementById("quizStart").innerHTML = "quiz is going on";


}



function verifyAns() {
    window.quizSubmitted = true;  
    clearTimeout(window.quizTimer);  

    let score = 0;
    const questions = [
        { inputName: "q1", correctAnswer: correctAnswers.correctAns1, resultId: "result1" },
        { inputName: "q2", correctAnswer: correctAnswers.correctAns2, resultId: "result2" },
        { inputName: "q3", correctAnswer: correctAnswers.correctAns3, resultId: "result3" },
        { inputName: "q4", correctAnswer: correctAnswers.correctAns4, resultId: "result4" },
        { inputName: "q5", correctAnswer: correctAnswers.correctAns5, resultId: "result5" },
        { inputName: "q6", correctAnswer: correctAnswers.correctAns6, resultId: "result6" },
        { inputName: "q7", correctAnswer: correctAnswers.correctAns7, resultId: "result7" },
        { inputName: "q8", correctAnswer: correctAnswers.correctAns8, resultId: "result8" },
        { inputName: "q9", correctAnswer: correctAnswers.correctAns9, resultId: "result9" },
        { inputName: "q10", correctAnswer: correctAnswers.correctAns10, resultId: "result10" },
        { inputName: "q11", correctAnswer: correctAnswers.correctAns11, resultId: "result11" },
        { inputName: "q12", correctAnswer: correctAnswers.correctAns12, resultId: "result12" },
        { inputName: "q13", correctAnswer: correctAnswers.correctAns13, resultId: "result13" },
        { inputName: "q14", correctAnswer: correctAnswers.correctAns14, resultId: "result14" },
        { inputName: "q15", correctAnswer: correctAnswers.correctAns15, resultId: "result15" },
    ];

    questions.forEach(question => {
        const selectedRadio = document.querySelector(`input[name="${question.inputName}"]:checked`);
        const resultElement = document.getElementById(question.resultId);

        if (selectedRadio) {
            const selectedAnswer = selectedRadio.value;
            if (selectedAnswer === question.correctAnswer) {
                resultElement.textContent = "Right Answer!";
                resultElement.style.color = "green";
                score++;
            } else {
                resultElement.textContent = "Wrong answer. The right answer is " + question.correctAnswer;
                resultElement.style.color = "red";
            }
        } else {
            resultElement.textContent = "No answer selected";
            resultElement.style.color = "orange";
        }
    });

    // Update score and result based on the total score
    document.getElementById("scoreContainer").textContent = `SCORE : ${score}`;
    if (score >= 10) {
        document.getElementById("resultContainer").textContent = "RESULT : You pass the exam!";
        document.getElementById("resultContainer").style.color = "green";
    } else {
        document.getElementById("resultContainer").textContent = "RESULT : You Fail the Exam...";
        document.getElementById("resultContainer").style.color = "red";
    }

    // Disable all radio buttons after submission
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
    document.getElementById("quizStart").innerHTML = "Please Restart the quiz =>";
    document.getElementById("quizStart").style.backgroundColor = "yellow";
    
}

function restartQuiz() {
    window.location.reload();
}
