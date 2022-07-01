import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Weather from './pages/Weather'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Titillium Web", "Helvetica", sans-serif`,
    },
  })

  return (
    <ThemeProvider theme={THEME}>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<Weather />} />
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
    </ThemeProvider>
  )
}

export default App
