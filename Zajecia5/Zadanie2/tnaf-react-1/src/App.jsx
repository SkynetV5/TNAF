
import './App.css'
import ShowUser from './ShowUser'

function App() {

  const users = [
    {name: "Jan", phone: "832727321", country: "Poland"},
    {name: "Tomasz", phone: "234727321", country: "Poland"},
    {name: "Leon", phone: "132727321", country: "Germany"}
  ]

  return (
    <>
      <div>
        <h1>Lista użytkowników</h1>
        {users.map(user => (
          <ShowUser key={user.name} name={user.name} phone={user.phone} country={user.country} />
        ))}
      </div>
    </>
  )
}

export default App
