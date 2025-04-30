import './App.css'
import { Button } from "@/components/ui/button"
import Chats from './components/chats'
import Header from './components/header'
import Dashboard from './components/dashboard'

function App() {
  return (
    <>
      <div className='flex flex-col justify-between items-center lg:flex-row'>
        <Header />

        {/* <Chats /> */}
        {/* <Dashboard /> */}
        
      </div>
    </>
  )
}

export default App
