import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Pokemones } from './pages/Pokemones'
import { Detalle } from './pages/Detalle'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pokemones' element={<Pokemones/>} />
        <Route path='/pokemones/:name' element={<Detalle/>} />
      </Routes>
    </>
  )
}

export default App
