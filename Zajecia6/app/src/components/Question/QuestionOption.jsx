
import "../Question/Question.css"

export default function QuestionOption({answer,correct, setScore,score, id, isCorrect, activeButton,setActiveButton, isDisabled, handleIsClicked, showCorrectness}){

    return (
        <button
            className={`button ${showCorrectness ? (isCorrect ? 'buttonCorrect' : 'buttonWrong') : ''} ${activeButton === id && showCorrectness ? 'buttonSelected' : ''}`}
            onClick={handleIsClicked}
            disabled={isDisabled}
        >
            {answer}
        </button>
    );
}