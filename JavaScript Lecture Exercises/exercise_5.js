
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


//Function to create an aray of country codes
function arrayGenerateOfCountryCodes(arrayOfCountries)
{
    let arrayOfCountryCodes = [];   //Pre define empty array for country codes

    for (let i=0; i < arrayOfCountries.length; i++)
    {
        arrayOfCountryCodes[i] = arrayOfCountries[i].iso3166Code;  // Assign the country code to the new array
    }

    // Print the array of country codes after the loop
    console.log(arrayOfCountryCodes);
}

//Call the function
arrayGenerateOfCountryCodes(arrayOfCountries);

