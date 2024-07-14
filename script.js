//object
const api = {
    //link
    endpoint:"https://api.openweathermap.org/data/2.5/", 
    //api key
    key: "51e5389e582067ce59a9ac81ae4e5e53"
    //api key
}
const input = document.querySelector("#input");
input.addEventListener("keypress", enter );

//стереть все в глитч !!!!
//1.  If -13/enter
//2.  search
function enter (e){
    if (e.keyCode===13){
        getInfo(input.value);
    }
}

async function getInfo(data){
    const res= await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const resRec = await res.json();
    diplayResult(resRec);
}

function diplayResult(resRec) {
    console.log(resRec);
    let city = document.querySelector("#city");
    city.textContent = `${resRec.name}, ${resRec.sys.country}`;
    
    
    // get our date 
    getOurDate();


    let temp = document.querySelector("#temp");
    temp.innerHTML = `${Math.round(resRec.main.temp)}<span>°</span>`;
    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `<span>Feels like:</span> ${Math.round(resRec.main.feels_like)}<span>°</span>`;
    let conditions = document.querySelector("#conditions");
    conditions.innerHTML = `${resRec.weather[0].description}`;
    let variation = document.querySelector("#variation");
    //variation.innerHTML = `<span>Min:</span> ${Math.round(resRec.main.temp_min)}<span>°</span> <span>Max:</span> ${Math.round(resRec.main.temp_max)}<span>°</span>`;
    variation.innerHTML  = "Min: " + `${Math.round(resRec.main.temp_min)}<span>°</span> ` + "Max: " + `${Math.round(resRec.main.temp_max)}<span>°</span>`;
}

function getOurDate() {
    //const myDate = new Date();
    //const options = { weekday: 'long'};
    //const dayWeek = myDate.toLocaleString('en-US', options);
    //let day = document.querySelector("#date");
    //day.innerHTML = dayWeek;


    //Today's Date
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Day - weekday 
    let day = days[myDate.getDay()];

    
    // Date- number
    let todayDate= myDate.getDate();



    //Month

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[myDate.getMonth()];

    //year 

    let year = myDate.getFullYear();

    // show

    let showDate = document.querySelector("#date");
    showDate.textContent =`${day} `+`${todayDate} `+`${month} `+` ${year}`
}
