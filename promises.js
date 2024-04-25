// 1.

let firstPromise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Promesa resuelta")
    }, 1000)

});

firstPromise
.then(response => console.log(response))
.catch(error => console.log(error))

// 2.

let secondPromise = new Promise((resolve, reject)=>{

    let condition = false;
    if(condition){
        setTimeout(()=>{
            resolve("Promesa resuelta")
        }, 1000)
    }
    else{
        setTimeout(()=>{
            reject("Promesa rechazada")
        }, 1000)
    }

});

secondPromise
.then(response => console.log(response))
.catch(error => console.log(error))

// 3. 

let thirdPromise = new Promise((resolve, reject)=>{

    let condition = true;
    if(condition){
        setTimeout(()=>{
            resolve("Promesa resuelta")
        }, 2000)
    }
    else{
        setTimeout(()=>{
            reject("Promesa rechazada")
        }, 2000)
    }

});

const asyncFunction = async () => {
    try{
        const result = await thirdPromise;
        console.log("showing the result: ", result)
    }catch(error){
        console.log(error)
    }
}

asyncFunction();

// 4.

const axios = require('axios');

const getLocations = () => {
    axios.get('https://rickandmortyapi.com/api/location')
    .then(response => console.log(response.data))
    .catch(error => console.log("Showing the error: ", error))
}

getLocations();

// 5.

const axios = require('axios');

const getBerry = () => {
    axios.get('https://pokeapi.co/api/v2/move')
    .then(response => console.log(response.data))
    .catch(error => console.log("The error is: ", error))
}

getBerry();

// 6.

const axios = require('axios');

const getCovid = () => {
    axios.get('https://api.covidtracking.com')
    .then(response => console.log(response.data))
    .catch(error => console.log("The error is: ", error))
}

getCovid();



