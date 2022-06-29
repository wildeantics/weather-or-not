import { Grid, Typography } from '@mui/material'
function Loading() {
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
      <Grid item sx={{ textAlign: 'center' }}>
        <Typography
          variant='h1'
          gutterBottom
          style={{
            color: 'rgba(183, 226, 243, 0.7)',
            textTransform: 'uppercase',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: '700',
          }}
        >
          Fetching your
          <br />
          Weather
        </Typography>
      </Grid>
      <Grid item>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{
            margin: 'auto',
            display: 'block',
            shapeRendering: 'auto',
          }}
          width='200px'
          height='200px'
          viewBox='0 0 100 100'
          preserveAspectRatio='xMidYMid'
        >
          <path
            fill='none'
            stroke='#fff'
            strokeWidth='8'
            strokeDasharray='166.78280334472657 89.80612487792968'
            d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z'
            strokeLinecap='round'
            style={{ transform: 'scale(0.8)', transformOrigin: '50px 50px' }}
          >
            <animate
              attributeName='stroke-dashoffset'
              repeatCount='indefinite'
              dur='2.5s'
              keyTimes='0;1'
              values='0;256.58892822265625'
            ></animate>
          </path>
        </svg>

        <Grid item sx={{ textAlign: 'center' }}>
          <Typography
            variant='subtitle'
            sx={{
              textTransform: 'lowercase',
            }}
          >
            one moment please
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Loading
