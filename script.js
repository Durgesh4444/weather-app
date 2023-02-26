
let data;
let input = document.querySelector("#input");
let cityName = document.querySelector(".cityname");
let stateName = document.querySelector(".statename");
let countryName = document.querySelector(".countryname");
let tempicon = document.querySelector(".con");
let temprature= document.querySelector(".temprature");
let condition= document.querySelector(".condition");
let humidityNumber= document.querySelector(".humidity-number");
let humidity= document.querySelector(".humidity");

const getdata =async(event)=>{
event.preventDefault();
if(!input.value){
    alert("Plaese Enter the City Name");
    return;
}
const city=input.value;

const fetchdata =await fetch(`https://api.weatherapi.com/v1/current.json?key=8e4a3cbd6fc44e8f86d51728232502&q=${city}`)

const orgData = await fetchdata.json();
data = orgData;
console.log(data);

cityName.innerHTML=data.location.name;
stateName.innerHTML=data.location.region;
countryName.innerHTML=data.location.country;
temprature.innerHTML=data.current.temp_c;
condition.innerHTML=data.current.condition.text;
humidityNumber.innerHTML=data.current.humidity;
}






