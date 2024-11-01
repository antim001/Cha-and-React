import {useState} from 'react';

function App() {
  const [color,setColor]=useState('olive')


  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >

    <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
   <button 
   onClick={()=>setColor("red")}
   className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-800'>
    Red
   </button>
   <button 
   onClick={()=>setColor("green")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-800'>
    Green
   </button>
   <button 
   onClick={()=>setColor("blue")}
   className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-800'>
    Blue
   </button>
   <button 
   onClick={()=>setColor("orange")}
   className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-800'>
    Orange
   </button>
   <button 
   onClick={()=>setColor("yellow")}
   className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-800'>
    Yellow
   </button>
</div>
    </div>
  
    </div>
    
  )
}

export default App
