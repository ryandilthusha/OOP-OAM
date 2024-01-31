// Object: Belgium with properties matching the Country interface
var belgium = {
    country: "Belgium",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],
    area: 30689,
    population: 11492641,
    gdpPerCapita: 50114,
    iso3166Code: "BE"
};
// Object: Germany with properties matching the Country interface
var germany = {
    country: "Germany",
    capital: "Berlin",
    languages: ["German"],
    area: 357022,
    population: 83149300,
    gdpPerCapita: 46445,
    iso3166Code: "DE"
};
//==========================
// Array of country objects
var arrayOfCountries = [belgium, germany];
//Function to iterate over each country and compare each of them population
function getMaxPopulationCountry(arrayOfCountries) {
    var countryWithMaxPopulation = arrayOfCountries[0]; //1st variable: let's assume max population has belgium
    for (var i = 0; i < arrayOfCountries.length; i++) {
        //for comparison we need to get 2 countries to sepeerate variable (1st variable outside the loop)        
        var currentCountry = arrayOfCountries[i]; //2nd variable: iteration current country (for now belgium)        
        if (currentCountry.population > countryWithMaxPopulation.population) {
            countryWithMaxPopulation = currentCountry; //updating the max populated country
        }
        else {
            //nothing
        }
    }
    //outisde the loop let's print the result
    console.log(countryWithMaxPopulation.country);
}
//function call
getMaxPopulationCountry(arrayOfCountries);
