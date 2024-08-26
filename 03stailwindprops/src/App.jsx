
import './App.css'
import Card from './components/Card'

function App() {
 
  let myObj={
    username: "akhi",
    age: 25
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click Me" />
      <Card username="Akhilesh" />

    </>
  )
}

export default App
