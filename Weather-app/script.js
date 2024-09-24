const inputBox=document.getElementById('input-box')
const btn=document.getElementById('search-btn')

let image=document.getElementById('images')
let temp=document.getElementById('temperature')
let cityName=document.getElementById('city_name')
let humid=document.querySelector('.info-humidity')
let wind=document.querySelector('.info-wind')

let  city_name;
btn.addEventListener('click',()=>{
    if(inputBox.value==""){
        image.outerHTML=`<span id="images"><img src="./images/404.png" alt="" width="200"></span>`
    }
    else{
          getWeather(inputBox.value);
    }
    inputBox.value="";
})


function getWeather(city_name){
    const apiKey= "7464f27eabda72396e1a248f6ff7684c"
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_name}&appid=${apiKey}`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        setWeatherInfo(data,city_name)
    }).catch((reject)=>{
        console.log("Error :",reject)
    })
    
}

function setWeatherInfo(data){
temp.innerHTML=`${data.main.temp}<span>°C</span>`
cityName.innerHTML=`${data.name}`

if(data.weather[0].main=='Clouds'){
    image.innerHTML=`<img src="./images/cloud.png" alt="" width="180">`
}else if(data.weather[0].main=='Rain'){
    image.innerHTML=`<img src="./images/rain.png" alt="" width="180">`
}else if(data.weather[0].main=='Snow'){
    image.innerHTML=`<img src="./images/snow.png" alt="" width="180">`
}
else if(data.weather[0].main=="Haze"){
    image.innerHTML=`<img src="./images/Haze.png" alt="" width="180">`
}
else if(data.weather[0].main=='Mist'||data.weather[0].main=='Dust'){
    image.innerHTML=`<img src="./images/mist.png" alt="" width="180">`
}
else if(data.weather[0].main=="Clear"){
    image.innerHTML=`<img src="./images/clear.png" alt="" width="180">`
}
else{
    image.innerHTML=`<img src="./images/404.png" alt="" width="180">`

}

humid.innerHTML=`<span><img src="./images/humid.png"  width="40"></span><h3 id="humidity">${data.main.humidity}%<br><span>Humidity</span></h3>`
wind.innerHTML=`<span><img src="./images/wind.png" width="40"></span><h3 id="wind">${data.wind.speed} Km/ph<br><span>Wind Speed</span></h3>`

}



