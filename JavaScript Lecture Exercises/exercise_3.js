//Object: belgium and it's attributes
let belgium = {
    country : "Belgium",
    capital : "Brussels",
    languages : ["Dutch, French, German"], //This is an ARRAY
    area : 30689, // in km²
    population : 11492641,
    gdpPerCapita: 50114, // in USD
    iso3166Code: "BE"
}


//Object: belgium and it's attributes
let germany  = {
    country : "Germany",
    capital : "Berlin",
    languages : ["German"], //This is an ARRAY
    area : 357022, // in km²
    population : 83149300,
    gdpPerCapita: 46445, // in USD
    iso3166Code: "DE"
}

//Object: france and it's attributes
let france = {
    country: "France",
    capital: "Paris",
    languages: ["French"], //This is an ARRAY
    area: 643801, // in km²
    population: 67391582,
    gdpPerCapita: 41464, // in USD
    iso3166Code: "FR"
};


// Array of country objects
let arrayOfCountries = [belgium , germany , france];


//Function to iterate over each country and compare each of them population
function getMaxPopulationCountry(arrayOfCountries) 
{

    let countryWithMaxPopulation = arrayOfCountries[0]; //1st variable: let's assume max population has belgium
    for (let i =0; i < arrayOfCountries.length; i++ )
    {
        //for comparison we need to get 2 countries to sepeerate variable (1st variable outside the loop)        
        let currentCountry = arrayOfCountries[i]; //2nd variable: iteration current country (for now belgium)        
        
        if (currentCountry.population > countryWithMaxPopulation.population)
        {
            countryWithMaxPopulation = currentCountry;   //updating the max populated country
        }
        else
        {
            //nothing
        }               

    }

    //outisde the loop let's print the result
    console.log(countryWithMaxPopulation.country);    
    
}

//function call
getMaxPopulationCountry(arrayOfCountries);

