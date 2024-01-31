
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

  #course:Course[]  //NEW: 1. To store Course Objects


  constructor (name:string , countryCodeForBirthplace:string){
    this.name = name;
    this.birthplaceCountryCode = countryCodeForBirthplace;
    this.teachingTopics = [];

    this.#course = [];  //NEW: 1. To store Course Objects
  }

  addTeachingTopic(teachingTopic:any){
    this.teachingTopics.push(teachingTopic);
  }

  //NEW: 2. Method to add Courses to Teacher Object
  //For this method, values are passing from Course Class addTechersToArray Method
  //When that Method Run, it simultaneously run this Method alos
  addCourse(course: Course) {      
    this.#course.push(course);
  }

  getCourse() : Course[]{
    return this.#course;
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

    addTechersToArray(teacher_obj : Teacher){
        this.teachers.push(teacher_obj);   
        //above code line add Course related Teacher to array
        
        //NEW: Below code line call the Teacher Object's addCourse method and pass this Object Variable to that
        teacher_obj.addCourse(this);    //"this" mean this object
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



//====Create Techer Object
let teacher1 = new Teacher('Lasse','FI'); //Create techer1 object
teacher1.addTeachingTopic('Coding');    
console.log(teacher1);  //Print Teacher1 object without passing anthing to Arrays

//====Create Techer Object
let course1 = new Course("OOBP" , "Object Oriented Browser Programming" , 12);
console.log(course1);  //Print Course1 object without passing anthing to Arrays


console.log("\n\n===========================")
//NOW LET's add "Lasse" Techer to "OOP" course.
course1.addTechersToArray(teacher1);

// Now let's print out those 2 objects
console.log(teacher1); 
console.log(course1);

console.log("\n\n====Course of Teacher1 is...");
console.log(teacher1.getCourse());


/*
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
*/










