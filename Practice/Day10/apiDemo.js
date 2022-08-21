let url = 'https://restcountries.com/v2/all'

import fetch from "node-fetch"

let fetchCountryData = async function(){
    let response = await fetch(url)
    let countryJson =await response.json()
    console.log(countryJson);
}
fetchCountryData()
