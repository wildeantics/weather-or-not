import React from 'react'
import { Grid, Typography } from '@mui/material'
import WeatherConditions from './WeatherConditions'

function Today({ celsius }) {
  const weather = JSON.parse(localStorage.getItem('weather'))
  const current = weather.current
  const forecast = weather.forecast.forecastday[0].day

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item>
        <Typography
          variant='h2'
          sx={{
            textTransform: 'uppercase',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          Today
        </Typography>
      </Grid>
      <Grid item>
        <WeatherConditions day='0' />
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
          {current.condition.text}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant='subtitle'
          sx={{
            textTransform: 'lowercase',
          }}
        >
          feels like
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
          {celsius ? current.feelslike_c + '°c' : current.feelslike_f + '°f'}
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
          }}
        >
          It will {forecast.daily_will_it_rain === 0 && 'not'} rain today
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Today
