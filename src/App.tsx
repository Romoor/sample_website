import { useState } from 'react'
import Button from './Components/Button/Button.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div>Hello World</div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <Button />
    </div>
  )
}

export default App