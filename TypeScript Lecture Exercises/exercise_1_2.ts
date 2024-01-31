// TypeScript interface to describe the structure of a Country object
interface Country {
    country: string;         // Name of the country
    capital: string;         // Capital city of the country
    languages: string[];     // Array of languages spoken in the country
    area: number;            // Total area of the country in square kilometers
    population: number;      // Population count
    gdpPerCapita: number;    // GDP per capita in USD
    iso3166Code: string;     // ISO 3166-1 alpha-2 country code
}

// Object: Belgium with properties matching the Country interface
let belgium: Country = {
    country: "Belgium",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"], 
    area: 30689,
    population: 11492641,
    gdpPerCapita: 50114,
    iso3166Code: "BE"
};

// Object: Germany with properties matching the Country interface
let germany: Country = {
    country: "Germany",
    capital: "Berlin",
    languages: ["German"], 
    area: 357022,
    population: 83149300,
    gdpPerCapita: 46445,
    iso3166Code: "DE"
};

// Function that accepts a Country object and prints its population
// The parameter country_Obj is typed with the Country interface
function printPopulation(country_Obj: Country) {
    console.log(country_Obj.country + ", population is " + country_Obj.population);
}

// Call the function with the Belgium and Germany objects
printPopulation(belgium);   // Outputs: Belgium, population is 11492641
printPopulation(germany);   // Outputs: Germany, population is 83149300
