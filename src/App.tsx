// import { useState } from 'react'
import FetchingTokenData from './components/FetchingTokenData'
import "./App.css"
import 'flowbite'

function App() {

  return (
    <>
      <div className="relative overflow-x-auto">
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white text-center'>Token Data</h1>
        <FetchingTokenData />
      </div>
  
    </>
  )
}

export default App
