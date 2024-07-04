import React from 'react'
import {BrowserRouter, createBrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {logo} from './assets';
import WrongForm from '../WrongForm'

import { Home, CreatePost } from './pages';
// import WrongForm from '../WrongForm';

const App = () => {
  return (
   <BrowserRouter>
    <header className='w-full flex justify-between items-center br-white sm:px-8 px-4  border-b border-b-[#e6ebf4] bg-[#271d3c] '>
    <Link to="/">
     <img src="https://cf-vectorizer-live.s3.amazonaws.com/vectorized/2ikB0e7Z6dTFB4nrycsE2Hcx2zx/2ikENnWWWpRCW5oO4KpPvtQbcMj.svg" alt='logo' className='w-32 h-24' />
    </Link>
     
     <Link to="/create-post" 
     className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
         Create
     </Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path='/form' element={<WrongForm/>} />
      </Routes>
    </main>
   </BrowserRouter>
  )
}

export default App 