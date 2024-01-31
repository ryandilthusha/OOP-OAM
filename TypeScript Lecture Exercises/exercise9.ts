/*Exercise 9

Your task is to create JS classes to represent students and teachers.

Student should have the following properties (There should be methods to set and get each property as well):

· Name

· Birthplace (country only, use two letter country codes from ISO 3166-1 alpha-2)

· Birthday

· Student Id (number, for example 34626)

· Class Id (eg. DIN21SP)

· Student email address

Teacher should have the following properties (There should be methods to set and get each property):

· Name

· Birthplace (country only, use two letter country codes from ISO 3166-1 alpha-2)

· Birthday

· Personnel Id (string, for example 345a-ffG-25KY)

· List of skill topics (for example frontend programming, mathematics, english language, communications etc.)

· Starting date of employment

· Staff email address

Use your classes to create five example student and two example teacher objects.
*/





class Student
{
  //Declare Properties
  name:string;
  birthplaceCountryCode:string;
  studentId:number;
  tutor:any;  //Number or String Anthing

  //Constructor to creat Objects
  constructor (name:string , countryCodeForBirthplace:string){
    this.name = name;
    this.birthplaceCountryCode = countryCodeForBirthplace;
    this.studentId = Math.floor(Math.random() * 10000000);
    this.tutor = undefined;
  }

  //Method of the Object
  setTutor(techerTutor:any){
    this.tutor = techerTutor;
  }

}


class Techer 
{
  name:string;
  birthplaceCountryCode:string;
  teachingTopics:string[];  //Array of Strings


  constructor (name:string , countryCodeForBirthplace:string){
    this.name = name;
    this.birthplaceCountryCode = countryCodeForBirthplace;
    this.teachingTopics = [];
  }

  addTeachingTopic(teachingTopic:any){
    this.teachingTopics.push(teachingTopic);
  }

}




//====Create an Student Object and Print it
let student1 = new Student('Ryan','SL'); //Create student1 object
console.log(student1);

//====Create an Techer Object and Print it.
let techer1 = new Techer('Lasse','FI'); //Create student1 object
techer1.addTeachingTopic('Coding');
console.log(techer1);

//Pass the techer1 object to student object method and print it
student1.setTutor(techer1);
console.log(student1);



