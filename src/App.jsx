import './App.css'
import Nav from './componentes/Nav'
import Intro from './componentes/Intro'

function App() {


  return (
   <main className='min-h-screen py-10' >
    <Nav/>
    <p className='bg-orange-500 h-[1132] text-zinc-50 bg-'>
      Hello world!!
    </p>
    <Intro/>
   </main>
  )
}

export default App