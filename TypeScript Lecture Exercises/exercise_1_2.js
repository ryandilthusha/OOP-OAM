//Object: belgium and it's attributes
var belgium = {
    country: "Belgium",
    capital: "Brussels",
    languages: ["Dutch, French, German"], //This is an ARRAY
    area: 30689, // in km²
    population: 11492641,
    gdpPerCapita: 50114, // in USD
    iso3166Code: "BE"
};
//Object: belgium and it's attributes
var germany = {
    country: "Germany",
    capital: "Berlin",
    languages: ["German"], //This is an ARRAY
    area: 357022, // in km²
    population: 83149300,
    gdpPerCapita: 46445, // in USD
    iso3166Code: "DE"
};
//Function which accept only 1 parameter
function printPopulation(country_Obj) {
    console.log(country_Obj.country + ", population is " + country_Obj.population);
}
// Calling the function for each country object
printPopulation(belgium); //Outputs: Belgium, population is 11492641
printPopulation(germany); //Outputs: Germany, population is 83149300
