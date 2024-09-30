import { useState } from 'react'
import { quizQuestions_1 } from './data/quizQuestions-1'
import { quizQuestions_2 } from './data/quizQuestions-2'
import { quizQuestions_3 } from './data/quizQuestions-3'
import { quizQuestions_4 } from './data/quizQuestions-4'
import { quizQuestions_5 } from './data/quizQuestions-5'
import { quizQuestions_6 } from './data/quizQuestions-6'
import { quizQuestions_7 } from './data/quizQuestions-7'
import { quizQuestions_8 } from './data/quizQuestions-8'
import { quizQuestions_9 } from './data/quizQuestions-9'
import { quizQuestions_10 } from './data/quizQuestions-10'
import { quizQuestions_11 } from './data/quizQuestions-11'
import { quizQuestions_12 } from './data/quizQuestions-12'
import { quizQuestions_13 } from './data/quizQuestions-13'
import { quizQuestions_14 } from './data/quizQuestions-14'

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Quiz.css'


const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const { quizId } = useParams();

  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  let questions; 

  if (quizId === '1') {
      questions = quizQuestions_1.questions; 
  } 
  else if (quizId === '2') {
      questions = quizQuestions_2.questions; 
  }
  else if (quizId === '3') {
    questions = quizQuestions_3.questions; 
  }
  else if (quizId === '4') {
    questions = quizQuestions_4.questions; 
  }
  else if (quizId === '5') {
    questions = quizQuestions_5.questions; 
  }
  else if (quizId === '6') {
    questions = quizQuestions_6.questions; 
  }
  else if (quizId === '7') {
    questions = quizQuestions_7.questions; 
  }
  else if (quizId === '8') {
    questions = quizQuestions_8.questions; 
  }
  else if (quizId === '9') {
    questions = quizQuestions_9.questions; 
  }
  else if (quizId === '10') {
    questions = quizQuestions_10.questions; 
  }
  else if (quizId === '11') {
    questions = quizQuestions_11.questions; 
  }
  else if (quizId === '12') {
    questions = quizQuestions_12.questions; 
  }
  else if (quizId === '13') {
    questions = quizQuestions_13.questions; 
  }
  else if (quizId === '14') {
    questions = quizQuestions_14.questions; 
  }
  
  const { question, choices, correctAnswer } = questions[activeQuestion]
  
  const onClickNext = () => {
    setUserAnswers([...userAnswers, {
        question,
        userAnswer: choices[selectedAnswerIndex],
        correctAnswer,
        isCorrect: choices[selectedAnswerIndex] === correctAnswer
    }]);

    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <>
    <Header />
    <div className="quiz-container-outer">
       <div className="quiz-container">
          {!showResult ? (
            <div>
              <div>
                <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                <span className="total-question"> / {addLeadingZero(questions.length)}</span>
              </div>
              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex-right">
                <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                  {activeQuestion === questions.length - 1 ? 'Finish' : 'Next ' + String.fromCharCode(9654) }
                </button>
              </div>
            </div>
          ) : (
            <div className="result">
                <h3>Results</h3>
                <div className="two-cols-result">
                    <div><p>Total Questions:</p></div>
                    <div><p><span>{questions.length}</span></p></div>
                </div>

                <div className="two-cols-result">
                    <div><p>Correct Answers:</p></div>
                    <div><p><span>{result.correctAnswers}</span></p></div>
                </div>
                
                <div className="two-cols-result">
                    <div><p>Incorrect Answers:</p></div>
                    <div><p><span>{result.wrongAnswers}</span></p></div>
                </div>                

                <h4>Detailed Results:</h4>
                  {userAnswers.map((answer, index) => (
                      <div key={index} className="question-result">
                          <p><strong>Question {index + 1}:</strong> {answer.question}</p>
                          {answer.isCorrect ? (
                              <p className="correct-answer">
                                  ✅ Correct: {answer.userAnswer}
                              </p>
                          ) : (
                              <>
                                  <p className="wrong-answer">
                                      ❌ Your answer: {answer.userAnswer}
                                  </p>
                                  <p className="correct-answer">
                                      ✅ Correct answer: {answer.correctAnswer}
                                  </p>
                              </>
                          )}
                      </div>
                  ))}
                    <p className="return-home-page"><Link to="/">Return to Home Page</Link></p>

             </div>

          )}
       </div>
       </div>
      <Footer/>

      </>
  )
}

export default Quiz