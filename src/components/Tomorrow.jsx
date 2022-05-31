import React from 'react'
import WeatherConditions from './WeatherConditions'
import { Grid, Typography } from '@mui/material'

function Tomorrow({ celsius }) {
  const forecast = JSON.parse(localStorage.getItem('weather')).forecast
    .forecastday[1].day
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
          Tomorrow
        </Typography>
      </Grid>
      <Grid item>
        <WeatherConditions day='1' />
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
          {forecast.condition.text}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant='subtitle'
          sx={{
            textTransform: 'lowercase',
          }}
        >
          average
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
          {celsius ? forecast.avgtemp_c + '°c' : forecast.avgtemp_f + '°f'}
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
          It will {forecast.daily_will_it_rain === 0 && 'not'} rain tomorrow
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Tomorrow
