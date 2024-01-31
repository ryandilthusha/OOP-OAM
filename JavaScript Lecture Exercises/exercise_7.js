
// Initialize and define the object for Sweden with country attributes and largest cities
let sweden = {
    // Basic country information
    name: "Sweden",
    capital: "Stockholm",
    languages: ["Swedish"],
    area: 450295,
    population: 10302731,
    gdpPerCapita: 50579,
    iso3166Code: "SE",
    // Array of largest cities and their population 
        //****(Inside this largestCities property a list of objects have written)*****
    largestCities: [
      { name: "Stockholm", population: 1515017 },
      { name: "Gothenburg", population: 572799 },
      // ... other cities
    ],
  };
  
  // Similar structure as Sweden for the France object
  let france = {
    // ... France's attributes
    largestCities: [
      { name: "Paris", population: 2140526 },
      // ... other cities
    ],
  };
  
  // Similar structure as above for the China object
  let china = {
    // ... China's attributes
    largestCities: [
      { name: "Shanghai", population: 24183300 },
      // ... other cities
    ],
  };
  
  
  
  
  // Array of all country objects
  let arrayOfCountries = [sweden, france, china];
  
  
  
  /* Function to print details for each country */
  function printCountryData(countries) //Bottom function call parse the "arrayOfCountries" array to here
  {
    
  //Apply forEach Methid to "arrayOfCountries" array
    countries.forEach((currentCountryElement) => 
    {
  
      // 1) Print each country name
      console.log("Country name: " + currentCountryElement.name);
      // 2) Print each country population
      console.log("Population: " + currentCountryElement.population);
    
      
      // 3) Print the names of the five biggest cities in the country and their population
      // 4) Print the total sum of population in the five biggest cities
      console.log("Names of five biggest cities and population: ");
      let sumOfPopulationInBiggestCities = 0;   //This belong to question 4)   (pre defined empty variable outisde the 2nd loop)
            
      
      currentCountryElement.largestCities.forEach((currentCity, index) =>   //This 2nd forEach loop inside of the main forEach loop   
      //And this 2nd forEach loop Method applied to Country Objects's LargestCities Property (An array). So largestCities property is an array to this loop.
      {
  
        console.log(`   ${index + 1}. ${currentCity.name}, population is: ${currentCity.population}`); //Answer for 3)
        
        
        sumOfPopulationInBiggestCities = sumOfPopulationInBiggestCities + currentCity.population;   //Answer for 4)
  
  
      });
  
  
  
      // Print the total population in the five biggest cities      //Answer for 4)  <-- Print the answer outside the 2nd loop
      console.log("Sum of population in five biggest cities: " + sumOfPopulationInBiggestCities);
  
  
  
      // 5)Calculate and print the percentage of population in these cities compared to the country's total population
      let percentageOfPopInFiveCitiesToCountryPop = (sumOfPopulationInBiggestCities / currentCountryElement.population) * 100;
      console.log ("Percentage of pop in five biggest cities: " + percentageOfPopInFiveCitiesToCountryPop.toFixed(2) + "%");
      console.log("\n"); // Newline for better readability
  
  
      
    });
  
  
  
  
  }
  
  
  // Calling the function to print the data
  printCountryData(arrayOfCountries);
  
  
  
  
  
  
  
  
  
    /* Same function as printCountryData, but using for loop instead of forEach */
    function printCountryDataUsingForLoop(countries) {
      for (let i = 0; i < countries.length; i++) {
        let currentCountry = countries[i];
        console.log("Country name: " + currentCountry.name);
        console.log("Population: " + currentCountry.population);
        console.log("Names of five biggest cities and population: ");
        let sumOfPopulationInBiggestCities = 0;
        for (let j = 0; j < currentCountry.largestCities.length; j++) {
          let currentCity = currentCountry.largestCities[j];
          console.log(
            `${j + 1}. ${currentCity.name}, population is: ${
              currentCity.population
            }`
          );
          sumOfPopulationInBiggestCities += currentCity.population;
        }
        console.log(
          "Sum of population in five biggest cities: " +
            sumOfPopulationInBiggestCities
        );
        let percentageOfPopInFiveCitiesToCountryPop =
          (sumOfPopulationInBiggestCities / currentCountry.population) * 100;
        console.log(
          "Percentage of pop in five biggest cities: " +
            percentageOfPopInFiveCitiesToCountryPop
        );
        console.log("\n");
      }
    }
    
    printCountryData(arrayOfCountries);
  
  
  
  
  
  