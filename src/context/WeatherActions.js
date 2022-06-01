export const weatherImages = (condition) => {
  // Import all images in the assets/icons folder
  const importAll = (r) => {
    let images = {}
    r.keys().map((item) => {
      return (images[item.replace('./', '')] = r(item))
    })
    return images
  }
  const images = importAll(
    require.context('../assets/icons', false, /\.(png|jpe?g|svg)$/)
  )
  // https://www.amcharts.com/free-animated-svg-weather-icons/
  switch (condition) {
    case 'Mist':
    case 'Partly cloudy':
      return <img src={images['cloudy-day-1.svg']} alt='Partly cloudy' />
    case 'Cloudy':
      return <img src={images['cloudy-day-2.svg']} alt='Cloudy' />
    case 'Overcast':
    case 'Fog':
      return <img src={images['cloudy.svg']} alt='Overcast' />
    case 'Sunny':
      return <img src={images['day.svg']} alt='Sunny' />
    case 'Patchy rain possible':
    case 'Patchy light drizzle':
    case 'Patchy light rain':
      return <img src={images['rainy-1.svg']} alt='Partly light rain' />
    case 'Sun showers':
      return <img src={images['rainy-2.svg']} alt='Sun showers' />
    case 'Light drizzle':
    case 'Light rain':
    case 'Light rain shower':
      return <img src={images['rainy-3.svg']} alt='Light rain' />
    case 'Moderate rain':
    case 'Moderate rain at times':
    case 'Heavy rain':
    case 'Heavy rain at times':
    case 'Moderate or heavy rain shower':
    case 'Torrential rain shower':
      return <img src={images['rainy-4.svg']} alt='Moderate to heavy rain' />
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
      return <img src={images['rainy-5.svg']} alt='Sleet or ice pellets' />
    case 'Patchy snow possible':
    case 'Patchy light snow':
      return <img src={images['snowy-1.svg']} alt='Patchy snow' />
    case 'Light snow':
    case 'Freezing fog':
    case 'Light snow showers':
      return <img src={images['snowy-2.svg']} alt='Light snow' />
    case 'Blowing snow':
    case 'Blizzard':
    case 'Patchy moderate snow':
    case 'Moderate snow':
    case 'Patchy heavy snow':
    case 'Heavy snow':
    case 'Moderate or heavy snow showers':
      return <img src={images['snowy-3.svg']} alt='Moderate to heavy snow' />
    case 'Thundery outbreaks possible':
    case 'Patchy light rain with thunder':
    case 'Moderate or heavy rain with thunder':
    case 'Patchy light snow with thunder':
    case 'Moderate or heavy snow with thunder':
      return <img src={images['thunder.svg']} alt='Thunder' />

    default:
      break
  }
}
export const weatherColors = (condition) => {
  switch (condition) {
    case 'Mist':
    case 'Partly cloudy':
    case 'Overcast':
    case 'Fog':
    case 'Patchy rain possible':
    case 'Patchy light drizzle':
    case 'Patchy light rain':
    case 'Light drizzle':
    case 'Light rain':
    case 'Light rain shower':
      return '#A7B8C4'
    case 'Cloudy':
    case 'Moderate rain':
    case 'Moderate rain at times':
    case 'Heavy rain':
    case 'Heavy rain at times':
    case 'Moderate or heavy rain shower':
    case 'Torrential rain shower':
      return '#7E8796'
    case 'Sunny':
    case 'Sun showers':
      return '#87CEEB'
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
      return '#fff'
    case 'Patchy snow possible':
    case 'Patchy light snow':
      return '#fff'
    case 'Light snow':
    case 'Freezing fog':
    case 'Light snow showers':
      return '#fff'
    case 'Blowing snow':
    case 'Blizzard':
    case 'Patchy moderate snow':
    case 'Moderate snow':
    case 'Patchy heavy snow':
    case 'Heavy snow':
    case 'Moderate or heavy snow showers':
      return '#fff'
    case 'Thundery outbreaks possible':
    case 'Patchy light rain with thunder':
    case 'Moderate or heavy rain with thunder':
    case 'Patchy light snow with thunder':
    case 'Moderate or heavy snow with thunder':
      return '#fff'

    default:
      break
  }
}
