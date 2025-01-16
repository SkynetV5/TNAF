export default function NextQuestion({setShowCorrectness,questionNumber, setQuestionNumber}){
   
        
    
    return <button onClick={() => {setShowCorrectness(false);
        setQuestionNumber(questionNumber + 1);}}>Dalej</button>
}