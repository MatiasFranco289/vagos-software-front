import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div>
      <NavigationBar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App
