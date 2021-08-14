// Global Variables 
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',&appid=336aa67b6a70846653c984e1e1065e97';

// Create a new date instance dynamically with JS
let date = new Date();
let newDate = date.getMonth()+1+'.'+ date.getDate()+'.'+ date.getFullYear();
console.log('The date is' + newDate);

const generate = document.getElementById('generate'); 
generate.addEventListener('click' , generateWheather);

function  generateWheather (e){
    const NewZip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    const temp = document.getElementById('temp').value;

    getWeather(baseURL,zip,apiKey)

   .then(function(data){
        console.log(data);
          postData('/add', {temp:temp, date:date, content:feeling});
          //run userView function
      })
    .then( userView());
      }

const getWeather = async(baseURL,zip,apiKey) => {
    const res = await fetch(baseURL+zip+apiKey);
    try{
        const data = await res.json();
        console.log(data);
        return data;
    } 
    catch(error){
        console.log("error" , error);
    }
}


const postData = async ( url = '' , data={})=>{
    console.log(data);
    const response = await fetch(url ,{
        method : 'post',
        credentials: 'same-origin',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    try {
        const newData =await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error" ,error)
    }
}
const userView= async()=>{
    const request =await fetch('/all');
    try{
        const allData= await request.json();
        document.getElementById('date').innerHTML="Date: " + (allData.date);
        document.getElementById('temp').innerHTML="the temperature is: " + (allData.temp);
        document.getElementById('content').innerHTML="my feeling is: " + (allData.content);
    }catch(error){
        console.log('error',error);
    }
}