import './App.css'
import { Rating } from './components/Rating'

function App() {

  return (
    <div className="App bg-black w-screen h-screen">
      <div className='flex flex-row min-h-screen justify-center items-center'>
        <Rating />
      </div>
    </div>
  )
}

export default App
