/* https://www.npmjs.com/package/react-swipeable */
/* https://thewebdev.info/2021/11/20/how-to-conditionally-render-items-based-on-viewport-size-in-react/ */
/* https://www.weatherapi.com/api-explorer.aspx#forecast */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './../components/Loading'
import Today from './../components/Today'
import Tomorrow from './../components/Tomorrow'
import DayAfter from './../components/DayAfter'
import { Grid } from '@mui/material'
import { toast } from 'react-toastify'
import { Typography } from '@mui/material'

function Weather() {
  const location = localStorage.getItem('location')
  const time = localStorage.getItem('time')
  const weather = JSON.parse(localStorage.getItem('weather'))
  const [celsius, setCelsius] = useState(true)
  const [loading, setLoading] = useState(true)

  const getIP = async () => {
    try {
      if (!location) {
        const response = await fetch('https://ipapi.co/json/')
        const json = await response.json()
        localStorage.setItem('location', json.ip)
      }
      getWeather()
    } catch (error) {
      toast.error('Problem fetching IP' + error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  const getWeather = async () => {
    try {
      if (Date.now() - time > 1800000) {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${location}&days=3&aqi=no&alerts=no`
        )
        const json = await response.json()
        localStorage.setItem('weather', JSON.stringify(json))
        localStorage.setItem('time', Date.now())
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (error) {
      toast.error('Problem fetching weather' + error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  useEffect(() => {
    getIP()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <Grid
      container
      columns={1}
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100vh' }}
    >
      <Grid item>
        <Typography
          variant='h1'
          gutterBottom
          sx={{
            textTransform: 'uppercase',
            fontWeight: '700',
            mb: 0,
          }}
        >
          {weather.location.name}
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          columns={3}
          columnGap={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item>
            <Today celsius={celsius} />
          </Grid>
          <Grid item>
            <Tomorrow celsius={celsius} />
          </Grid>
          <Grid item>
            <DayAfter celsius={celsius} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 30, md: 3 }}
        direction={{ xs: 'row', md: 'column' }}
        justifyContent='center'
        alignItems='center'
        sx={{ position: 'absolute', bottom: '10px' }}
      >
        <Grid item sx={{ cursor: 'pointer', userSelect: 'none' }}>
          <p onClick={() => setCelsius(!celsius)}>
            {celsius ? 'Imperial' : 'Celsius'}
          </p>
        </Grid>
        <Grid item>
          <Link to='/about'>About</Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Weather
