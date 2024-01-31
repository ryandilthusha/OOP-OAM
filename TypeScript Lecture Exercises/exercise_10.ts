
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


class Teacher 
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


class Course
{
    name : string;
    description : string;
    courseId : number;
    teachers : Teacher[];   //Teacher becuase I'm gonna pass Techer objects to this array
    registeredStudent : Student[];  //Student becuase I'm gonna pass Student objects to this array


    constructor (name:string , description:string , courseId:number){
        this.name = name;
        this.description = description;
        this.courseId = courseId;
        
        this.teachers = [];
        this.registeredStudent = [];

    }

    addTechersToArray(teacher_obj : any){
        this.teachers.push(teacher_obj);
    }

    addStudentsToArray(student_obj : any){
        this.registeredStudent.push(student_obj);
    }


    //Method to print only registered students name to console
    displayRegisteredStudentNames(){

        console.log(`\n\nStudents of "${this.name}" are as following`)
        //since there are multiple objects in array we have iterate over this
        this.registeredStudent.forEach(function(currentElement){
            console.log(currentElement.name)            
        });

        
    }


}



//====Create 2 Student Objects
let student1 = new Student('Ryan','SL'); //Create student1 object
let student2 = new Student('Christina','RU'); //Create student2 object

//====Create 2 Techer Objects
let teacher1 = new Teacher('Lasse','FI'); //Create techer1 object
teacher1.addTeachingTopic('Coding');    

let teacher2 = new Teacher('Pekka','FI'); //Create techer2 object
teacher2.addTeachingTopic('Web');   


student1.setTutor(teacher1); //Pass the techer1 object to student1 object
student2.setTutor(teacher2); //Pass the techer2 object to student2 object


//1. Let's create a course object
let course1 = new Course("OOBP" , "Object Oriented Browser Programming" , 12);
console.log(course1);  //Print Course object without passing anthing to Arrays

//2. Now let's pass student and teacher Objecs to empty arrays using Course Object's method
course1.addTechersToArray(teacher1);
course1.addTechersToArray(teacher2);
course1.addStudentsToArray(student1);
course1.addStudentsToArray(student2);

console.log("\n\n*** Finlalized Course Object ***"); 
console.log(course1);  //Print Course object


//====== NOW Let's TEST the Exercise 10.1 Output Here =======
//Run newly created method to display course registered students list
course1.displayRegisteredStudentNames();











