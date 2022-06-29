import { FaFigma, FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'

function About() {
  return (
    <>
      <Grid
        container
        columns={1}
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
        sx={{
          height: '30vh',
          background: '#002947',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Grid item>
          <Typography
            variant='h1'
            gutterBottom
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              textTransform: 'uppercase',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              fontWeight: '700',
              fontSize: '35vw',
              transform: 'translate(-3%, -24%)',
              overflow: 'hidden',
            }}
          >
            About
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        columns={1}
        direction='column'
        justifyContent='flex-end'
        alignItems='center'
        sx={{
          height: '70vh',
          background: '#002947',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Grid item sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant='body'>
            Hi, I'm Morgan
            <br />
            Thanks for checking out my app
            <br />
            In this app I used
          </Typography>
        </Grid>
        <Grid item sx={{ mb: 2 }}>
          <FaFigma size={50} />
          <FaReact size={50} />
        </Grid>

        <Grid item sx={{ textAlign: 'center' }}>
          <p>This was developed for my</p>
          <a href='https://wilde.mx'>
            <Typography
              variant='h2'
              sx={{
                textTransform: 'uppercase',
                fontWeight: '700',
                fontSize: 'max(21vw, 120px)',
                transform: 'translateX(-3%)',
                textShadow:
                  '0px 4px 4px rgba(0, 0, 0, 0.25), 2px 4px 0px rgba(255, 255, 255, 0.25)',
              }}
            >
              Portfolio
            </Typography>
          </a>
          <p>Code accessible on my</p>
          <a href='https://github.com/wildeantics'>
            <Typography
              variant='h2'
              sx={{
                textTransform: 'uppercase',
                fontWeight: '700',
                fontSize: '31vw',
                transform: 'translateX(-3%)',
                textShadow:
                  '0px 4px 4px rgba(0, 0, 0, 0.25), 2px 4px 0px rgba(255, 255, 255, 0.25)',
              }}
            >
              GitHub
            </Typography>
          </a>
        </Grid>

        <Grid item sx={{ position: 'absolute', left: 0, top: '50%' }}>
          <Link to='/'>Back</Link>
        </Grid>
      </Grid>
    </>
  )
}

export default About
