export default function ResultButton({setShowCorrectness, setIsFinished}){
    return <button onClick={() => {
        setShowCorrectness(false);
        setIsFinished(true);
    }}>Wynik</button>
}