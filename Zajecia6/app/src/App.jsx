
import './App.css'
import getQuestions from './common/service/getQuestions'
import Quiz from './components/Quiz/Quiz'

function App() {
  const questions = getQuestions();

  return (
    <div>
      <Quiz questions={questions}/>
    </div>
  )
}

export default App
