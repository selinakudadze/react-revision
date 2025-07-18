import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  const student="Selina";
  const teacher="Augustine"
 
  return (
    
    <div>
      <Header/>
        <div className='p-4 bg-blue-50'>
          <Card cardTitle={"Card 1"} description={"This is the first card created"}/>
          <Card cardTitle={"Card 2"} description={"This is the second card created"}/>
          <Card cardTitle={"Card 3"} description={"This is the third card created"}/>
        </div> 
      <Footer student={student} teacher={teacher}/>
    </div>
  )
}

export default App;
