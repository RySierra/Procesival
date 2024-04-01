import './App.css'
import Nav from './componentes/Nav'
import Intro from './componentes/Intro'
import Footer from './componentes/Footer'

function App() {


  return (
   <main className='min-h-screen py-1' >
    <Nav/>
    <p className='bg-customGreen h-[700px] text-zinc-50 '>
      Hello world!!
    </p>
    <Intro/>
    <Footer/>
   </main>
  )
}

export default App

//- Figure out the scroll bar glitch when hovering on menu icon
//Finish formatting nav bar
//Add drop down menus for the Activos en Renta and the Patrimonio bars
//Start with big logo and on scroll shrink it

//-Fix the dropdown menu placement
//-Add the other dropdown menus
//Logo shrinking

//Comment code properly
//-hide tabs until box is right size
