import React from 'react'
import { Grid, Typography } from '@mui/material'
import WeatherConditions from './WeatherConditions'

function WeatherSection({ celsius, day }) {
  const weather = JSON.parse(localStorage.getItem('weather'))
  const current = weather.current
  const forecast = weather.forecast.forecastday[day].day
  const days = ['Today', 'Tomorrow', 'Day After']

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
            textTransform: 'uppercase',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 0.4)',
            mb: 8,
          }}
        >
          {days[day]}
        </Typography>
      </Grid>
      <Grid item sx={{ position: 'absolute', top: 15 }}>
        <WeatherConditions day={day} />
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
          {day === '0' ? current.condition.text : forecast.condition.text}
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
