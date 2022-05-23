import React from 'react'

function Tomorrow({ celsius }) {
  const forecast = JSON.parse(localStorage.getItem('weather')).forecast
    .forecastday[1].day
  return (
    <div>
      <h2 className='day'>Tomorrow</h2>
      <p>{forecast.condition.text}</p>
      <p>average</p>
      <p>{celsius ? forecast.avgtemp_c + '°c' : forecast.avgtemp_f + '°f'}</p>
      <p>min</p>
      <p>{celsius ? forecast.mintemp_c : forecast.mintemp_f}</p>
      <p>max</p>
      <p>{celsius ? forecast.maxtemp_c : forecast.maxtemp_f}</p>
      <p>
        It probably will {forecast.daily_will_it_rain === 0 && 'not'} rain
        tomorrow
      </p>
    </div>
  )
}

export default Tomorrow
