import { useState } from "react";
import Question from "../Question/Question";
import "../Quiz/Quiz.css";
import NextQuestion from "./NextQuestion";
import ResultButton from "./ResultButton";


export default function Quiz({questions}){

    const [isFinished,setIsFinished] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [score,setScore] = useState(0);
    const [showCorrectness, setShowCorrectness] = useState(false);
    console.log(questions);
    console.log(questionNumber)

    return <> {!isFinished ? (<div className="quiz">
        <p>Pytanie {questionNumber + 1}/{questions.length}</p>
        <Question questionText={questions[questionNumber].text} correct={questions[questionNumber].correct} options={questions[questionNumber].options} setScore={setScore} score={score} showCorrectness={showCorrectness} setShowCorrectness={setShowCorrectness}/>
        {showCorrectness && questionNumber != questions.length -1  && (<div className="buttonPosition"><NextQuestion setShowCorrectness={setShowCorrectness} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/></div>)}
        {showCorrectness && questionNumber == questions.length -1 && (<div className="buttonPosition"><ResultButton setShowCorrectness={setShowCorrectness} setIsFinished={setIsFinished}/></div>)}
        </div>) : <div className="result">
        <p>Pytanie {questionNumber + 1}/{questions.length}</p>
        <p>Twój wynik: {score}/{questions.length}</p>
        </div>}
        </>
}