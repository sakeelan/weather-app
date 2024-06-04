import React, {useState} from 'react'
import "./weatherapp.css"

import search_icon from "../assets/search.webp"
import sunny from "../assets/sunny.png"
import cloud_icon from "../assets/cloudy.png"
import drizzle_icon from "../assets/dizzle.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/huminity.png"
import rain_icon from "../assets/rainy.png"
import snow_icon from "../assets/coldy.png"

let urlps='https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=fef1012bc0df6f2c6b528ffa58e69c4b';


const Weatherapp=()=> {

 
  let api="fef1012bc0df6f2c6b528ffa58e69c4b";

  const [wicon, setwicon] = useState(cloud_icon)

const  search= async()=>{
  
var element=document.getElementsByClassName('cityinput')
const loc=document.getElementsByClassName("weather-location");
  if (element[0].value=== "") {
    return 0;
  }else if(!element.value=== "") {


loc.innerHTML="NOT VALID CITY";

  }
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`;
let response= await fetch(url);
let data= await response.json();
 const humidity=document.getElementsByClassName("humidity-percent");
 const wind=document.getElementsByClassName("wind-rate");
 const temperature=document.getElementsByClassName("weather-temp");
 const location=document.getElementsByClassName("weather-location");
 const lat=document.getElementsByClassName("latpoint");
 const long=document.getElementsByClassName("longpoint");
 const con=document.getElementsByClassName("country");

humidity[0].innerHTML=data.main.humidity+"%";

wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
location[0].innerHTML=data.name;

lat[0].innerHTML=data.coord.lat;
long[0].innerHTML=data.coord.lon;
con[0].innerHTML=data.sys.country;




if (data.weather[0].icon=== "01d" || data.weather[0].icon==="01n") {
  setwicon(sunny)
}
else if (data.weather[0].icon=== "02d" || data.weather[0].icon==="01n") {
  setwicon(cloud_icon)
}
else if (data.weather[0].icon=== "03d" || data.weather[0].icon==="03n") {
  setwicon(drizzle_icon)
}
else if (data.weather[0].icon=== "04d" || data.weather[0].icon==="04n") {
  setwicon(drizzle_icon)
}
else if (data.weather[0].icon=== "09d" || data.weather[0].icon==="09n") {
  setwicon(rain_icon)
}
else if (data.weather[0].icon=== "010d" || data.weather[0].icon==="010n") {
  setwicon(rain_icon)
}
else if (data.weather[0].icon=== "013d" || data.weather[0].icon==="013n") {
  setwicon(snow_icon)
}else{
  setwicon(sunny)
}
}

 
  return (
    
    <div className='container'>
<div className='top-bar'>
  <input type="text" className='cityinput'  placeholder='CITY NAME'/>
  <div className='search-icon' onClick={()=>{search()}}>
    <img src={search_icon} alt="" />
  </div>
</div>
<div className="weather-image">
  <img src={wicon} alt="" />
</div>
<div className="weather-temp">38°C</div>
<div className="weather-location">Chennai</div>

  <div className='country' >INDIA</div>
<div className='gps'>
<div className="">
  <div className="lat">Latitude</div>
  <div className="latpoint">000</div>
</div>
<div className="">
  <div className="lat">Longitude</div>
  <div className="longpoint">000</div>
  </div>
</div>
<div className="data-container">

  <div className="element">
    <img src={humidity_icon} alt="" className='icon'/>
    <div className="data">
      <div className="humidity-percent">64%</div>
      <div className="humidity">Humidity</div>
    </div>
  </div>
  <div className="element">
    <img src={wind_icon} alt="" className='icon'/>
    <div className="data">
      <div className="wind-rate">20KM/h</div>
      <div className="text">Wind Speed</div>
</div></div>
    </div>
    <h4> Designed by Sakeelan</h4>
    </div>
  )
}

export default Weatherapp;