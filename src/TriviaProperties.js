const TriviaProperties = [];
for (let i = 0; i < 5; i++) {
    TriviaProperties.push({
        id : i+1,
        question : null,
        correctAnswer : null,
        selectedAnswer : null,
        wrongAnswers : []
    })
}

export default TriviaProperties;