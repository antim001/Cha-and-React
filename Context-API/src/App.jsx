import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
     <h1 className='text-black text-center mt-10 text-5xl font-semibold '>React with Chai</h1>
      
    </UserContextProvider>
  )
}

export default App
