import "../Question/Question.css";
import QuestionOption from "./QuestionOption";
import { useState } from "react";

export default function Question({questionText,correct,options, setScore, score, showCorrectness, setShowCorrectness}){
    const [activeButton,setActiveButton] = useState(null);


    function handleIsClicked(id) {
        setActiveButton(id);
        setShowCorrectness(true); 
        if (id === correct) {
            setScore(score + 1);
        }
    }

    return <div className="question">
        <p>{questionText}</p>
        <div className="hr"></div>
        <div className="options">
        {options.map((option) => (
            <QuestionOption key={option.id} answer={option.answer} correct={correct} setScore={setScore} id={option.id} isCorrect={option.id === correct} 
            activeButton={activeButton} setActiveButton={setActiveButton}
             isDisabled={activeButton !== null && showCorrectness}  handleIsClicked={() => handleIsClicked(option.id)}  showCorrectness={showCorrectness}/>
        ))}
        </div>
    </div>
}