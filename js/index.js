
let nameCity = document.getElementById("nameCity")
let inSearch = document.getElementById("search")

let data =[]

function search() {
    inSearch.addEventListener("change",function(){
        getData(inSearch.value)
    })
}

async function getData(city="egypt"){
    let req = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=509eb4d5080e4316b5a161133241001&days=3&q=${city}` )
        data = await req.json()
    display()
}
getData() 
search()

function display(){
    
    document.getElementById("country").innerHTML = data.location.country
    document.getElementById("nameCity").innerHTML = data.location.name
    // date today
    document.getElementById("dayDate").innerHTML = data.forecast.forecastday[0].date
    document.getElementById("ico").setAttribute("src","https://"+data.forecast.forecastday[0].day.condition.icon)
    document.getElementById("dayC").innerHTML = data.forecast.forecastday[0].day.avgtemp_c+" °C"
    document.getElementById("dayText").innerHTML = data.forecast.forecastday[0].day.condition.text
    // date tomorrow
    document.getElementById("dayDate2").innerHTML = data.forecast.forecastday[1].date
    document.getElementById("ico2").setAttribute("src","https://"+data.forecast.forecastday[1].day.condition.icon)
    document.getElementById("dayC2").innerHTML = data.forecast.forecastday[1].day.avgtemp_c+" °C"
    document.getElementById("dayText2").innerHTML = data.forecast.forecastday[1].day.condition.text
    // date After tomorrow
    document.getElementById("dayDate3").innerHTML = data.forecast.forecastday[2].date
    document.getElementById("ico3").setAttribute("src","https://"+data.forecast.forecastday[2].day.condition.icon)
    document.getElementById("dayC3").innerHTML = data.forecast.forecastday[2].day.avgtemp_c+" °C"
    document.getElementById("dayText3").innerHTML = data.forecast.forecastday[2].day.condition.text

}
