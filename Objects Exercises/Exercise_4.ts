
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







// ============ Exercise's Object Creations and Calling Methods 
let banana = new Food('Banana', 4);
banana.whatIsThis();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();

