import React, {useState} from "react"
import axios from "axios"
import "../src/App.css" 

function App() {
  const [data,setData] = useState({})
  const [location, setLocation]= useState('')
  // const [weatherIcon, setWeatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`)
 
// eslint-disable-next-line no-template-curly-in-string
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=67ad10e319c8a6c07cb3f2345e65cce3&units=metric`;




let clientID = 'Xhw4RjF5-Ob3p-C-kVvweLVWmCiHYpd18xyJXQL3miw'
const apiUnsplash = `https://api.unsplash.com//photos/random/?client_id=${clientID}` 
const imageElement = document.querySelector(".unsplashImage");

 fetch(apiUnsplash)
 .then(function(response){
   return response
 })
 .then(function (jsonData){
   imageElement.src = jsonData.urls.regular
 });

//  /////icon
//  const dayIcon =`${process.env.REACT_APP_ICON_URL + day.weather[0]["icon"]}@2x.png`   ///googler wtm @2x

// //////////////////////////

 
//////ville

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      // eslint-disable-next-line no-template-curly-in-string
      axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }
    ///////7days 
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = new Date();
  const dayname = days[day.getDay()];
  
 

  return (
   <div className="app">
     <div className="container">
     <img  className="unsplashImage" src="" alt="background" />
       <div className="container__search ">
         <input className="container__input" 
         placeholder="  Search city..."
         type="text"
         value={location}
         onChange={event => setLocation(event.target.value)} 
         onKeyPress={searchLocation}/>
       </div>
      
       <div className="container__first">
         {data.city ? <h1> 📍 {data.city.name} </h1> : null }
          <p>🗓 Today</p> 
          <p>{date}</p>
        {data.list ? <p> min {data.list[0].main.temp_min.toFixed()}  °C </p> : null}
        {data.list ? <p> max {data.list[0].main.temp_max.toFixed()} °C </p> : null}
        {/* {data.weather ? <p>nl{data.weather[0].main}</p> : null} */}
         <img src="sun.png" alt="temps" />
       </div>
       <div className="container__second">
         <p>{ dayname}</p>
         <img src="./public/logo192.png" alt="" />
         {data.list ? <p> min {data.list[1].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[1].main.temp_max.toFixed()} °C </p> : null}
       </div>
       <div className="container__third">
       <p>{dayname}</p>
         <img src="./public/logo192.png" alt="" />
         {data.list ? <p> min {data.list[2].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[2].main.temp_max.toFixed()} °C </p> : null}
       </div>
       <div className="container__fourth">
       <p>{dayname}</p>
         <img src="./public/logo192.png" alt="" />
         {data.list ? <p> min {data.list[3].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[3].main.temp_max.toFixed()} °C </p> : null}
       </div>
       <div className="container__fifth">
       <p>{dayname}</p>
         <img src="./public/logo192.png" alt="" />
         {data.list ? <p> min {data.list[4].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[4].main.temp_max.toFixed()} °C </p> : null}

       </div>
        
     </div>
   </div>

  )
}

export default App