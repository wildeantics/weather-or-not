// https://www.amcharts.com/free-animated-svg-weather-icons/
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function WeatherConditions({ day }) {
  const weather = JSON.parse(localStorage.getItem('weather'))
  const [condition, setCondition] = useState('')

  // Import all images in the assets/icons folder
  const importAll = (r) => {
    let images = {}
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item)
    })
    return images
  }
  const images = importAll(
    require.context('../assets/icons', false, /\.(png|jpe?g|svg)$/)
  )

  useEffect(() => {
    if (day === '0') {
      setCondition(weather.current.condition.text)
    } else {
      setCondition(weather.forecast.forecastday[day].day.condition.text)
    }
  }, [])

  switch (condition) {
    case 'Mist':
    case 'Partly cloudy':
      return (
        <img
          src={images['cloudy-day-1.svg']}
          width='128px'
          height='128px'
          alt='Partly cloudy'
        />
      )
    case 'Cloudy':
      return (
        <img
          src={images['cloudy-day-2.svg']}
          width='128px'
          height='128px'
          alt='Cloudy'
        />
      )
    case 'Overcast':
    case 'Fog':
      return (
        <img
          src={images['cloudy.svg']}
          width='128px'
          height='128px'
          alt='Overcast'
        />
      )
    case 'Sunny':
      return (
        <img src={images['day.svg']} width='128px' height='128px' alt='Sunny' />
      )
    case 'Patchy rain possible':
    case 'Patchy light drizzle':
    case 'Patchy light rain':
      return (
        <img
          src={images['rainy-1.svg']}
          width='128px'
          height='128px'
          alt='Partly light rain'
        />
      )
    case 'Sun showers':
      return (
        <img
          src={images['rainy-2.svg']}
          width='128px'
          height='128px'
          alt='Sun showers'
        />
      )
    case 'Light drizzle':
    case 'Light rain':
    case 'Light rain shower':
      return (
        <img
          src={images['rainy-3.svg']}
          width='128px'
          height='128px'
          alt='Light rain'
        />
      )
    case 'Moderate rain':
    case 'Moderate rain at times':
    case 'Heavy rain':
    case 'Heavy rain at times':
    case 'Moderate or heavy rain shower':
    case 'Torrential rain shower':
      return (
        <img
          src={images['rainy-4.svg']}
          width='128px'
          height='128px'
          alt='Moderate to heavy rain'
        />
      )
    case 'Patchy sleet possible':
    case 'Patchy freezing drizzle possible':
    case 'Freezing drizzle':
    case 'Light freezing rain':
    case 'Moderate or heavy freezing rain':
    case 'Light sleet':
    case 'Moderate or heavy sleet':
    case 'Ice pellets':
    case 'Light sleet showers':
    case 'Moderate or heavy sleet showers':
    case 'Light showers of ice pellets':
    case 'Moderate or heavy showers of ice pellets':
      return (
        <img
          src={images['rainy-5.svg']}
          width='128px'
          height='128px'
          alt='Sleet or ice pellets'
        />
      )
    case 'Patchy snow possible':
    case 'Patchy light snow':
      return (
        <img
          src={images['snowy-1.svg']}
          width='128px'
          height='128px'
          alt='Patchy snow'
        />
      )
    case 'Light snow':
    case 'Freezing fog':
    case 'Light snow showers':
      return (
        <img
          src={images['snowy-2.svg']}
          width='128px'
          height='128px'
          alt='Light snow'
        />
      )
    case 'Blowing snow':
    case 'Blizzard':
    case 'Patchy moderate snow':
    case 'Moderate snow':
    case 'Patchy heavy snow':
    case 'Heavy snow':
    case 'Moderate or heavy snow showers':
      return (
        <img
          src={images['snowy-3.svg']}
          width='128px'
          height='128px'
          alt='Moderate to heavy snow'
        />
      )
    case 'Thundery outbreaks possible':
    case 'Patchy light rain with thunder':
    case 'Moderate or heavy rain with thunder':
    case 'Patchy light snow with thunder':
    case 'Moderate or heavy snow with thunder':
      return (
        <img
          src={images['thunder.svg']}
          width='128px'
          height='128px'
          alt='Thunder'
        />
      )

    default:
      break
  }
}

export default WeatherConditions
