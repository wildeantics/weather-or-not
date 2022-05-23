/* https://www.npmjs.com/package/react-swipeable */
/* https://thewebdev.info/2021/11/20/how-to-conditionally-render-items-based-on-viewport-size-in-react/ */
/* https://www.weatherapi.com/api-explorer.aspx#forecast */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './../components/Loading'
import Today from './../components/Today'
import Tomorrow from './../components/Tomorrow'
import DayAfter from './../components/DayAfter'

function Weather() {
  const location = localStorage.getItem('location')
  const [celsius, setCelsius] = useState(true)
  const [loading, setLoading] = useState(true)

  const getIP = async () => {
    fetch('https://ipapi.co/json/')
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        localStorage.setItem('location', res.ip)
      })
      .catch((err) => console.error('Problem fetching my IP', err))
  }
  const getWeather = async () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${location}&days=3&aqi=no&alerts=no`
    )
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        localStorage.setItem('weather', JSON.stringify(res))
      })
  }

  useEffect(() => {
    if (!location) {
      getIP()
    }
    if (localStorage.getItem('weather')) {
      // Check if local is 30 minutes old data
      let current = Math.floor(Date.now() / 1000)
      let time = JSON.parse(localStorage.getItem('weather')).location
        .localtime_epoch
      if (current - time > 1800000) {
        console.log(time)
        getWeather()
      }
    } else {
      getWeather()
    }
    console.log(localStorage.getItem('weather'))
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <>
      <Today celsius={celsius} />
      <Tomorrow celsius={celsius} />
      <DayAfter celsius={celsius} />
      <p onClick={() => setCelsius(!celsius)}>
        {celsius ? 'Imperial' : 'Celsius'}
      </p>
      <Link to='/about'>About</Link>
    </>
  )
}

export default Weather
