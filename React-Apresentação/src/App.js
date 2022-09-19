import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Componentes/Home'
import Faq from'./Componentes/Faq'
import Menu from'./Componentes/Menu'


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/Faq" element={<Faq />}></Route>

      </Routes>
    </Router>
    
  )
}

export default App