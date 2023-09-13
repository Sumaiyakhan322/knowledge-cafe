

import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Reading from './Components/Reading/Reading'

function App() {
 

  return (
    <div className='max-w-screen-xl mx-auto'>
    <Header></Header>
    <div className='md:flex'>
    <Blogs className></Blogs>
    <Reading></Reading>

    </div>
    </div>
  )
}

export default App
