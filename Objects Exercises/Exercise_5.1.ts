
//Class for Food

class Food 
{
  //2. Basic Variable's data type declaration (as private)
  #foodType:string;
  #quantity:number;

  //1. Basic Variables Define in Constructor (as private)
  constructor(foodType:string , quantity:number)
  {
    this.#foodType = foodType;
    this.#quantity = quantity;
  }

  //3. Basic Variable's getter methods (it's a good coding habit)
  getFoodType()
  {
    return this.#foodType;
  }
  getQuantity()
  {
    return this.#quantity;
  }




  //4. Basic calling methods declaration for the Exercise
  whatIsThis()  //Should Display type of the food
  {
    console.log(this.#foodType);
  }

  eatOne() //Should reduce quantity of the specific food by 1 and return the value
  {
    if (this.#quantity > 0)
    {
      this.#quantity = this.#quantity - 1;
      console.log(`Slurp! One ${this.#foodType.toLowerCase()} eaten. ${this.#quantity} remaining`);
    }
    else if(this.#quantity == 0)
    {
      console.log(`Sorry, no more ${this.#foodType.toLowerCase()}s remaining!`);
    }
  }
}



//Class for Refrigerator
class Refrigerator
{

    #foodArray:Food[];
    

    constructor ()
    {
        this.#foodArray =[];

    }

    //1. Methods Declaration for Exercise Needed
    putFood(food_obj:Food)  //To store in array to put passing food objects
    {
        this.#foodArray.push(food_obj);
    }    

    getContents() //To show the food list in the array
    {
        /* 
        //USING FOR EACH METHOD
        console.log('------------')
        this.#foodArray.forEach(function(cuttentElement)
        {
            console.log(`| ${cuttentElement.getFoodType()} ${cuttentElement.getQuantity()}`);
        }); 
        console.log('------------')
        */
        
        //USING FOR LOOP, PRINT EACH FOOD ELEMENT
        console.log('------------')
        for(let i=0; i < this.#foodArray.length; i++)
        {
            console.log(`| ${this.#foodArray[i].getFoodType()} ${this.#foodArray[i].getQuantity()}`);
        }
        console.log('------------')
    }


    getAndEatFood(food_str:string) //to eat food and show the quantity
    {
        let foundFood = false;


        //Let's find the food type 1st in a array
        for(let i=0; i < this.#foodArray.length; i++)
        {
            //If we have apples left
            if (food_str == this.#foodArray[i].getFoodType() && this.#foodArray[i].getQuantity()>0)
            {
                this.#foodArray[i].eatOne();
                foundFood = true;
            }

            //If we have no more apples left
            else if (food_str == this.#foodArray[i].getFoodType() && this.#foodArray[i].getQuantity()==0)
            {
                console.log('Sorry, no such food in this refrigerator!');
                foundFood = true;

                this.#foodArray.splice(i,1);
            }
            
            

        }

        //If unexisted food type **************            
        if (foundFood == false)
        {
            console.log('Sorry!');  //For testing purpose
        }

        
    }

}





// ============ NEW Exercise's (Exercise 5) Object Creations and Calling Methods 
let r = new Refrigerator();
let apple = new Food('Apple', 2);
let bananas = new Food('Banana', 3);
r.putFood(apple);
r.putFood(bananas);
r.getContents();

r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple');
r.getAndEatFood('DragonFruit');  //I aded for testing
r.getContents();


