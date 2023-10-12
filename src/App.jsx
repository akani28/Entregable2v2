
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos)=>{
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const API_KEY = "00f358c88d7bb99b4dd87d18d444a5b4"
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(url)
    .then(({data})=>{
      console.log(data)
      setWeatherInfo(data)
    })
    .catch((err)=>console.log(err))

  }
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success)
  },[])

  return (
    <>

    <Weather weatherInfo={weatherInfo}/>
      
    </>
  )
}

export default App
