/* https://www.npmjs.com/package/react-swipeable */
/* https://thewebdev.info/2021/11/20/how-to-conditionally-render-items-based-on-viewport-size-in-react/ */
/* https://www.weatherapi.com/api-explorer.aspx#forecast */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './../components/Loading'
import { Grid } from '@mui/material'
import { toast } from 'react-toastify'
import { Typography } from '@mui/material'
import WeatherSection from '../components/WeatherSection'
import { weatherColors } from '../context/WeatherActions'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Weather() {
  const location = localStorage.getItem('location')
  const time = localStorage.getItem('time')
  const weather = JSON.parse(localStorage.getItem('weather'))
  const [celsius, setCelsius] = useState(true)
  const [loading, setLoading] = useState(true)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650)
  }
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

  const color = {
    color1: weatherColors(weather.current.condition.text),
    color2: weatherColors(weather.forecast.forecastday[1].day.condition.text),
    color3: weatherColors(weather.forecast.forecastday[2].day.condition.text),
  }

  useEffect(() => {
    getIP()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
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
      sx={{
        height: '100vh',
        background: `linear-gradient(90deg, ${color.color1}, ${color.color1}, ${color.color2},${color.color2}, ${color.color3}, ${color.color3})`,
      }}
    >
      <Grid
        item
        sx={{
          position: 'absolute',
          top: '16vh',
          textTransform: 'uppercase',
        }}
      >
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
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{
            width: '100vw',
          }}
        >
          <Swiper className='mySwiper'>
            <SwiperSlide>
              <WeatherSection day='0' celsius={celsius} />
              <Typography
                variant='h4'
                gutterBottom
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  position: 'absolute',
                  textAlign: 'center',
                  top: '30%',
                  right: 0,
                  mb: 0,
                  writingMode: 'vertical-lr',
                  transform: 'rotate(180deg)',
                  color: 'rgba(256, 256, 256, 0.7)',
                }}
              >
                Tomorrow
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography
                variant='h4'
                gutterBottom
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  position: 'absolute',
                  textAlign: 'center',
                  top: '30%',
                  left: 0,
                  mb: 0,
                  writingMode: 'vertical-lr',
                  color: 'rgba(256, 256, 256, 0.7)',
                }}
              >
                Today
              </Typography>
              <WeatherSection day='1' celsius={celsius} />
              <Typography
                variant='h4'
                gutterBottom
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  position: 'absolute',
                  textAlign: 'center',
                  top: '30%',
                  right: 0,
                  mb: 0,
                  writingMode: 'vertical-lr',
                  transform: 'rotate(180deg)',
                  color: 'rgba(256, 256, 256, 0.7)',
                }}
              >
                Day After
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography
                variant='h4'
                gutterBottom
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  position: 'absolute',
                  textAlign: 'center',
                  top: '30%',
                  left: 0,
                  mb: 0,
                  writingMode: 'vertical-lr',
                  color: 'rgba(256, 256, 256, 0.7)',
                }}
              >
                Tomorrow
              </Typography>
              <WeatherSection day='2' celsius={celsius} />
            </SwiperSlide>
          </Swiper>
          {/* <Grid item xs={12} md={4} xl={3}>
            <WeatherSection day='0' celsius={celsius} />
          </Grid>
          <Grid item xs={12} md={4} xl={3}>
            <WeatherSection day='1' celsius={celsius} />
          </Grid>
          <Grid item xs={12} md={4} xl={3}>
            <WeatherSection day='2' celsius={celsius} />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 30, md: 3 }}
        direction={{ xs: 'row', md: 'column' }}
        justifyContent='center'
        alignItems='center'
        sx={{
          position: 'absolute',
          bottom: '10px',
          textTransform: 'lowercase',
        }}
      >
        <Grid item sx={{ cursor: 'pointer', userSelect: 'none' }}>
          <p onClick={() => setCelsius(!celsius)}>
            To {celsius ? 'Imperial' : 'Celsius'}
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
