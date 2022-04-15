import React, {useState} from "react"
import axios from "axios"
import "../src/App.css" 



function App() {
  const [data,setData] = useState({})
  const [location, setLocation]= useState('')
  // const [image, setImage] = useState();


  // const apiUnsplash = `https://api.unsplash.com//photos/random/?client_id=Xhw4RjF5-Ob3p-C-kVvweLVWmCiHYpd18xyJXQL3miw` ;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=67ad10e319c8a6c07cb3f2345e65cce3&units=metric`;

// fetch(apiUnsplash)
//   .then((response) => {
//     setImage(response.data.results[0].urls.regular);
//     document.body.style.color = "white";
//   })
 

  // const imageElement = document.querySelector(".unsplashImage");
  
  // fetch(apiUnsplash)
  // .then(function(response){
  //   return response
  // })
  // .then(function (jsonData){
  //   imageElement.src = jsonData.urls.regular
  // });



  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }


    ///////7days 
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = new Date();
  const dayname = days[day.getDay()];
 
 
 return (
   <div className="app">
     <div className="container">
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
          <p>🗓 Today / {dayname} / {date}</p> 
        {data.list ? <p> min {data.list[0].main.temp_min.toFixed()}  °C </p> : null}
        {data.list ? <p> max {data.list[0].main.temp_max.toFixed()} °C </p> : null}
        <img className='weather-icon' src={data.list ? `http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}.png` : null} alt=""/>
       </div>

       <div className="container__second">

         <p>Tomorrow </p>
         <img className='weather-icon' src={data.list ? `http://openweathermap.org/img/wn/${data.list[15].weather[0].icon}.png` : null} alt=""/>
         {data.list ? <p> min {data.list[1].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[1].main.temp_max.toFixed()} °C </p> : null}
       </div>

       <div className="container__third">

       <p>The day after tomorrow 🎬 </p>
       <img className='weather-icon' src={data.list ? `http://openweathermap.org/img/wn/${data.list[23].weather[0].icon}.png` : null} alt=""/>
         {data.list ? <p> min {data.list[2].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[2].main.temp_max.toFixed()} °C </p> : null}
       </div>

       <div className="container__fourth">

       <p>An ordinary day</p>
       <img className='weather-icon' src={data.list ? `http://openweathermap.org/img/wn/${data.list[31].weather[0].icon}.png` : null} alt=""/>
         {data.list ? <p> min {data.list[3].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[3].main.temp_max.toFixed()} °C </p> : null}
       </div>

       <div className="container__fifth">

        <p>A special day</p>
        <img className='weather-icon' src={data.list ? `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png` : null} alt=""/>
         {data.list ? <p> min {data.list[4].main.temp_min.toFixed()} °C </p> : null}
         {data.list ? <p> max {data.list[4].main.temp_max.toFixed()} °C </p> : null}
       </div>
        
     </div>
   </div>

  )
}

export default App