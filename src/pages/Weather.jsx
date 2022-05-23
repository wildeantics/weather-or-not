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
    try {
      if (!location) {
        const response = await fetch('https://ipapi.co/json/')
        const json = await response.json()
        localStorage.setItem('location', json.ip)
      }
      getWeather()
    } catch (error) {
      console.error('Problem fetching my IP', error)
    }
  }
  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${location}&days=3&aqi=no&alerts=no`
      )
      const json = await response.json()
      localStorage.setItem('weather', JSON.stringify(json))
      setLoading(false)
    } catch (error) {
      console.error('Problem fetching weather', error)
    }
  }

  useEffect(() => {
    getIP()
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
