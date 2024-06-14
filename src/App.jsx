import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Pokemones } from './pages/Pokemones'
import { Detalle } from './pages/Detalle'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/pokemones' element={<Pokemones/>} />
        <Route path='/pokemones/:name' element={<Detalle/>} />
      </Routes>
    </>
  )
}

export default App
