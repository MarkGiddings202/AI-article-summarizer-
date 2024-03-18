import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'

// adding css file
import './App.css'

function App() {
  return (
    <div>
      <main>
    <div className='main'>
      <div className='gradiant' />
    </div>
    <div className='app'>
      <Hero/>
      <Demo/>
    </div>
  </main>
  </div>
    
  )
}

export default App