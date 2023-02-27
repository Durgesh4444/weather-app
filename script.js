
let data;
let input = document.querySelector("#input");
let cityName = document.querySelector(".cityname");
let stateName = document.querySelector(".statename");
let countryName = document.querySelector(".countryname");
let tempicon = document.querySelector("#con-logo");
let temprature= document.querySelector(".temprature");
let condition= document.querySelector(".condition");
let humidityNumber= document.querySelector(".humidity-number");
let humidity= document.querySelector(".humidity");
let date=document.querySelector(".date");
let ftemp=document.querySelector(".fere-num");
let Hightemp=document.querySelector(".high-num");
let LowTemp=document.querySelector(".low-num");
let windnum=document.querySelector(".wind-num");
let rainnum=document.querySelector(".rain-num");
let sunrisetime=document.querySelector(".sunrise-time");
let sunsettime=document.querySelector(".sunset-time");

const getdata =async(event)=>{
event.preventDefault();
if(!input.value){
    alert("Plaese Enter the City Name");
    return;
}
const city=input.value;

const fetchdata =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8e4a3cbd6fc44e8f86d51728232502&q=${city}&days=6`)

const orgData = await fetchdata.json();
data = orgData;
console.log(data);
// if (input.value !=data.location.name){
// alert("Please Enter valid city Name")
// return;
// }

cityName.innerHTML=data.location.name;
stateName.innerHTML=data.location.region;
countryName.innerHTML=data.location.country;
temprature.innerHTML=data.current.temp_c;
condition.innerHTML=data.current.condition.text;
humidityNumber.innerHTML=data.current.humidity;
tempicon.src=data.current.condition.icon;
date.innerHTML=data.location.localtime;
ftemp.innerText=data.current.temp_f;
Hightemp.innerHTML=data.forecast.forecastday[1].day.maxtemp_c;
LowTemp.innerHTML=data.forecast.forecastday[1].day.mintemp_c;
windnum.innerHTML=data.current.wind_kph;
rainnum.innerText=data.current.cloud;
sunrisetime.innerHTML=data.forecast.forecastday[1].astro.sunrise;
sunsettime.innerHTML=data.forecast.forecastday[1].astro.sunset;

}






