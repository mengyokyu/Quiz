document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

    const quizQuestions = [
        {
            question: 'What is the integral of ∫x² dx?',
            options: ['x³/3 + C', 'x³ + C', '2x + C', 'x² + C'],
            answer: 'x³/3 + C'
        },
        {
            question: 'Which of the following are valid methods to solve integrals?',
            options: ['Substitution', 'Integration by Parts', 'Partial Fractions', 'All of the above'],
            answer: 'All of the above'
        },
        {
            question: 'Evaluate the integral ∫e^x dx.',
            options: ['e^x + C', 'e^x', 'x e^x + C', 'e^x/x + C'],
            answer: 'e^x + C'
        }
    ];

    function loadQuiz() {
        let output = '';
        quizQuestions.forEach((currentQuestion, questionIndex) => {
            output += `
                <div class="mb-3">
                    <div class="question">${currentQuestion.question}</div>
                    <div class="options">
                        ${currentQuestion.options.map((option, index) => `
                            <label class="option">
                                <input type="radio" name="question${questionIndex}" value="${option}">
                                ${option}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        quizContainer.innerHTML = output;
    }

    function getSelectedAnswers() {
        return quizQuestions.map((_, questionIndex) => {
            const selectedOption = document.querySelector(`input[name="question${questionIndex}"]:checked`);
            return selectedOption ? selectedOption.value : '';
        });
    }

    function calculateScore(selectedAnswers) {
        return selectedAnswers.reduce((score, answer, index) => {
            return answer === quizQuestions[index].answer ? score + 1 : score;
        }, 0);
    }

    function showResult() {
        const selectedAnswers = getSelectedAnswers();
        const score = calculateScore(selectedAnswers);
        resultDiv.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
    }

    submitBtn.addEventListener('click', showResult);

    loadQuiz();
});
