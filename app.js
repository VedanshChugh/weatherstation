function fetch_data()
{
    var cityName = document.getElementById("city").value
    console.log(cityName)
    if(cityName==="")
    {
        alert("Enter city name ")
    }
    var url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=e2256a53fd1597aedd0abe0adbd7f350&units=metric"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var resp_code = data["cod"]
        if (resp_code=="404")
            {
                alert("City name not found")
            }
        else{
            var cityTemp = data["main"]["temp"]
            console.log(cityTemp)
            var icon=data["weather"]["0"]["icon"]
            console.log(icon)
            var icon_url="https://openweathermap.org/img/wn/"+icon+"@2x.png"
            document.getElementById("result").innerHTML=
            "<img src="+icon_url+">"+"<br>" +"<h3> Temperature is :"+cityTemp+"&deg;C</h3>"}
    })
    
}

