import Todo from "./Todo";

export default function Todos(tasks,setTasks){
    return <>
        <Todo />
        <hr></hr>
        <h1>To do ({tasks.length < 1 ? tasks.length : 0})</h1>
      </>
}