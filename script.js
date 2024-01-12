let ip = document.getElementById('input') ; 
let btn =document.getElementById('btn') ; 

let activeCase =document.getElementById('activeCase') ; 
let OverallCase =document.getElementById('OverallCase') ; 
let Overallrecovery =document.getElementById('Overallrecovery') ; 
let todayCase =document.getElementById('todayCase') ; 
let todayDeath =document.getElementById('todayDeath') ; 
let todayrecovery =document.getElementById('todayrecovery') ; 

async function fetchdata () {
    console.log(ip.value)
    let data = await fetch('https://disease.sh/v3/covid-19/countries/'+ip.value) ; 
    let response =await data.json() ; 
    console.log(response) ; 
    console.log(response.country)
    console.log(response.active)
    console.log(response.cases)
    console.log(response.deaths)

    activeCase.innerHTML = response.active ; 
    OverallCase.innerHTML = response.cases ; 
    Overallrecovery.innerHTML=response.recovered ;
    todayCase.innerHTML=response.todayCases ; 
    todayDeath.innerHTML = response.todayDeaths ; 
    todayrecovery.innerHTML =response.todayRecovered;
    
}
btn.addEventListener('click' , fetchdata);