import React from 'react'

function Today({ celsius }) {
  const weather = JSON.parse(localStorage.getItem('weather'))
  const current = weather.current
  const forecast = weather.forecast.forecastday[0].day
  return (
    <div>
      <h2 className='day'>Today</h2>
      <p>{current.condition.text}</p>
      <p>feels like</p>
      <p>{celsius ? current.feelslike_c + '°c' : current.feelslike_f + '°f'}</p>
      <p>min</p>
      <p>{celsius ? forecast.mintemp_c : forecast.mintemp_f}</p>
      <p>max</p>
      <p>{celsius ? forecast.maxtemp_c : forecast.maxtemp_f}</p>
      <p>
        It probably will {forecast.daily_will_it_rain === 0 && 'not'} rain today
      </p>
    </div>
  )
}

export default Today
