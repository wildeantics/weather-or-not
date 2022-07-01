/* https://www.npmjs.com/package/react-swipeable */
/* https://thewebdev.info/2021/11/20/how-to-conditionally-render-items-based-on-viewport-size-in-react/ */
/* https://www.weatherapi.com/api-explorer.aspx#forecast */

import { useEffect, useState } from 'react'
import Loading from './../components/Loading'
import { Grid } from '@mui/material'
import { toast } from 'react-toastify'
import { Typography } from '@mui/material'
import WeatherSection from '../components/WeatherSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import GitHubIcon from '@mui/icons-material/GitHub'

function Weather() {
  const [weather, setWeather] = useState({})
  const [celsius, setCelsius] = useState(true)
  const [loading, setLoading] = useState(true)

  const getWeather = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const json = await response.json()
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${json.ip}&days=3&aqi=no&alerts=no`
      )
      setWeather(await res.json())
      setLoading(false)
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
    getWeather()
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
        background: '#002947',
      }}
    >
      <Grid item>
        <Typography
          variant='h1'
          sx={{
            textTransform: 'uppercase',
            fontWeight: '700',
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
              <WeatherSection day='0' celsius={celsius} weather={weather} />
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
                  cursor: 'grab',
                }}
              >
                Tomorrow
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <WeatherSection day='1' celsius={celsius} weather={weather} />
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
                  cursor: 'grab',
                }}
              >
                Today
              </Typography>
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
                  cursor: 'grab',
                }}
              >
                Day After
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <WeatherSection day='2' celsius={celsius} weather={weather} />
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
                  cursor: 'grab',
                }}
              >
                Tomorrow
              </Typography>
            </SwiperSlide>
          </Swiper>
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
          <a href='https://github.com/wildeantics'>
            <GitHubIcon />
          </a>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Weather
