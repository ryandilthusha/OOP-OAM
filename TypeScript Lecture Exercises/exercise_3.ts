
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

//==========================


// Define an array to hold objects conforming to the Country interface
let arrayOfCountries: Country[] = [belgium, germany];

/**
 * Function to determine the country with the maximum population within the array.
 * @param arrayOfCountries An array of objects conforming to the Country interface.
 * @returns void This function does not return anything, it logs the result to the console.
 */
function getMaxPopulationCountry(arrayOfCountries: Country[]): void {
    // Assume the first country has the maximum population initially
    let countryWithMaxPopulation = arrayOfCountries[0]; // Assuming Belgium is the max

    // Iterate over each country in the array to find the one with the max population
    for (let i = 0; i < arrayOfCountries.length; i++) {
        // Hold the current country in the iteration
        let currentCountry = arrayOfCountries[i]; // Now comparing with the next country
        
        // Compare the population of the current country with the max population
        if (currentCountry.population > countryWithMaxPopulation.population) {
            // Update if the current country has a larger population
            countryWithMaxPopulation = currentCountry; // Updating the max populated country
        } else {
            // No action needed if the current country does not have a larger population
            // Continue to the next iteration
        }               
    }

    // After the loop, log the country with the maximum population
    console.log(countryWithMaxPopulation.country); // Logging the country with max population    
}

// Call the function with the array of country objects
getMaxPopulationCountry(arrayOfCountries); // Function call to find and log the country with max population

