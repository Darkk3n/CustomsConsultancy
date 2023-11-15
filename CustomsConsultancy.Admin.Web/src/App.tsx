import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    fetch("https://localhost:7108/api/HelloWorld")
      .then(r => r.json())
      .then(d => setMessage(d))


  }, [])


  return (
    <>
      <div>App Loaded {message}</div>
    </>
  )
}

export default App
