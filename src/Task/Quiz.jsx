import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    // Fetch quiz data from the API
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(
          'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
        );
        const quizQuestions = response.data.results.map((question) => {
          // Randomize the answers order
          const answers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ].sort(() => Math.random() - 0.5);
          return {
            ...question,
            answers,
          };
        });
        setQuestions(quizQuestions);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  // Handle answer selection
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  // Move to the next question or show the score
  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(''); // Reset selected answer for the next question
    } else {
      setShowScore(true); // Show the score at the end of the quiz
    }
  };

  if (questions.length === 0) {
    return <div>Loading quiz...</div>; // Display a loading message while fetching data
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {showScore ? (
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
          <p dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }} />
          <div>
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                style={{
                  backgroundColor: selectedAnswer === answer ? 'lightblue' : 'white',
                  padding: '10px',
                  margin: '10px',
                  display: 'block',
                  width: '300px',
                }}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            style={{ marginTop: '20px', padding: '10px 20px' }}
          >
            {currentQuestionIndex + 1 === questions.length ? 'Show Score' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
