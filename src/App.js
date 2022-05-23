import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Weather from './pages/Weather'

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Weather />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
