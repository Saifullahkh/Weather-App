import React, { useState } from 'react'
import './WetherApp.css'
import cloud from '../Assets/cloud.png'
import search from '../Assets/search.png'
import wind from '../Assets/wind.png'
import humidity from '../Assets/humidity.png'
import clear from '../Assets/clear.png'
import rain from '../Assets/rain.png'
import drizzle from '../Assets/drizzle.png'
import snow from '../Assets/snow.png'

function WetherApp() {

    let api_key = '3c423e102bb03b9e8a9afdad206018cb'

    const [wicon, setWicon] = useState(cloud)

    const searches = async () => {
        const element = document.getElementsByClassName('cityInput')
        if(element[0].value==='')
        {
            return 0; 
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
        
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName('humidity-percent')
        const wind = document.getElementsByClassName('wind-rate')
        const temprature = document.getElementsByClassName('wether-temp')
        const location = document.getElementsByClassName('wether-location')

        humidity[0].innerHTML = data.main.humidity+ ' %';
        wind[0].innerHTML = data.wind.speed+ ' km/hr';
        temprature[0].innerHTML = data.main.temp+ ' C';
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n')
        {
            setWicon(clear)
        }
        else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n')
        {
            setWicon(cloud)
        }
        else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n')
        {
            setWicon(drizzle)
        }
        else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n')
        {
            setWicon(drizzle)
        }
        else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n')
        {
            setWicon(rain)
        }
        else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n')
        {
            setWicon(rain)
        }
        else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n')
        {
            setWicon(snow)
        }
        else{
            setWicon(clear)
        }
    }

  return (
    <>
      <div className="container">
        <div className="row  ">
            <div className="col-9  ">
                <input type="text" placeholder='Search' className='cityInput top-bar mt-5'  />
            </div>
            <div className="col-3" >
                <img src={search} alt="" onClick={() => searches()} className='search-icon bg-white   d-flex justify-content-center align-items-center mt-5' />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <img src={wicon} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h1 className='wether-temp text-white'>24<sup>o</sup>C</h1>
                <h4 className='wether-location text-white'>London</h4>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-6 d-flex">
                <img src={humidity} alt="" className='humiwind'  />
                <div>
                <h6 className='text-white ms-1 humidity-percent'>87 %</h6>
                <p className='text text-white ms-1'>Humidity</p>
                </div>
            </div>
            <div className="col-6 d-flex ">
                <img src={wind} alt="" className='humiwind' />
                <div>
                <h6 className="wind-rate text-white ms-1">5.14 km/hr</h6>
                <p className='text text-white ms-1'>Wind Speed</p>
                </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default WetherApp
