import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { weatherImages } from './../context/WeatherActions'

function WeatherSection({ celsius, day }) {
  const weather = JSON.parse(localStorage.getItem('weather'))
  const current = weather.current
  const forecast = weather.forecast.forecastday[day].day
  const days = ['Today', 'Tomorrow', 'Day After']
  const [condition, setCondition] = useState('')

  useEffect(() => {
    if (day === '0') {
      setCondition(weather.current.condition.text)
    } else {
      setCondition(weather.forecast.forecastday[day].day.condition.text)
    }
  }, [day, weather])

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ position: 'relative' }}
    >
      <Grid item>
        <Typography
          variant='h2'
          sx={{
            color: 'rgba(183, 226, 243, 0.7)',
            textTransform: 'uppercase',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: '700',
            mb: 14,
          }}
        >
          {days[day]}
        </Typography>
      </Grid>
      <Grid item sx={{ position: 'absolute', top: -10 }}>
        {weatherImages(condition)}
      </Grid>
      <Grid item>
        <Typography
          variant='h5'
          gutterBottom
          sx={{
            textTransform: 'lowercase',
            mb: 5,
          }}
        >
          {day === '0' ? condition : condition}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant='subtitle'
          sx={{
            textTransform: 'lowercase',
          }}
        >
          {day === '0' ? 'feels like' : 'average'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant='h2'
          gutterBottom
          sx={{
            textTransform: 'uppercase',
            fontWeight: '700',
          }}
        >
          {day === '0'
            ? celsius
              ? `${current.feelslike_c}°c`
              : `${current.feelslike_f}°f`
            : celsius
            ? `${forecast.avgtemp_c}°c`
            : `${forecast.avgtemp_f}°f`}
        </Typography>
      </Grid>
      <Grid
        container
        spacing={{ xs: 10, md: 15 }}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <Typography
                variant='subtitle'
                sx={{
                  textTransform: 'lowercase',
                }}
              >
                min
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='h5'
                gutterBottom
                sx={{
                  textTransform: 'uppercase',
                  mt: '0',
                  fontWeight: 600,
                }}
              >
                {celsius ? forecast.mintemp_c : forecast.mintemp_f}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <Typography
                variant='subtitle'
                sx={{
                  textTransform: 'lowercase',
                }}
              >
                max
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='h5'
                gutterBottom
                sx={{
                  textTransform: 'uppercase',
                  mt: '0',
                  fontWeight: 600,
                }}
              >
                {celsius ? forecast.maxtemp_c : forecast.maxtemp_f}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          variant='h6'
          gutterBottom
          sx={{
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          It will {forecast.daily_will_it_rain === 0 && 'not'} rain today
        </Typography>
      </Grid>
    </Grid>
  )
}

export default WeatherSection
