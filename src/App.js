import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Weather from './pages/Weather'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Weather />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
