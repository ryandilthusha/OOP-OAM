
//Class Creation
class Book
{
    //Passing Variables Declaration
    #title: string;
    #author: string;
    #available: boolean;

    constructor(title:string , author:string)
    {
        this.#title = title;
        this.#author = author;

        this.#available=true;  //When Object is creating Automatically Book is marked as available
    }

    //Getters
    getTitle()
    {
        return this.#title;
    }
    getAuthor()
    {
        return this.#author;
    }
    getAvailable()
    {
        if (this.#available==true)
        {
            return `Available`;
        }
        else if (this.#available==false)
        {
            return `Not Available`;
        }
    }


    //==Exercise Asking Methods==
    borrowBook()    //Mark the book as borrowed (if it's not already borrowed).
    {
        //The book avaialable variable should mark as false
        this.#available = false;

    }

    returnBook()    //Mark the book as available again.
    {
        //The book avaialable variable should mark as true
        this.#available = true;
    }

    getInfo()       //Display information about the book (title, author, and availability).
    {
        //Should display the book details in console
        return (`The Book is "${this.getTitle()}" Written by "${this.getAuthor()}" and it is "${this.getAvailable()}"`);
    }

}




//Create Class Called Library
class Library
{
    #bookArray:Book[];

    //Constructor to store variables
    constructor()   //************* No Need to state the book object in constructor parameter.
    {
        this.#bookArray = [];
    }



    //Methods that Exercise asking to create
    addBook(book_obj:Book)   //Add a new book to the library.
    {
        this.#bookArray.push(book_obj);
    }

    borrowBook(bookTitle:string)    //Borrow a book from the library (if available).
    {
        //This object's title ('1984') is passed here as an string
        //So 1st we need to go through books array list until find the specific book ('1984')
        //If the book is found, we need to call thebook object's borrowBook method

        this.#bookArray.forEach((currentElement,index)=>{     //let's do this with forEach method instead of using loop. (for FUN!)

            if(currentElement.getTitle()== bookTitle)
            {
                currentElement.borrowBook();
                console.log(`The book " ${bookTitle}" is borrowed....`)

    
            }
        });
    }

    returnBook(bookTitle:string)    //Return a book to the library.
    {
        //This is oppsite of Borrow Book. Just  Copy Paste and Fix. 
        this.#bookArray.forEach((currentElement,index)=>{     //let's do this with forEach method instead of using loop. (for FUN!)

            if(currentElement.getTitle()== bookTitle)
            {
                currentElement.returnBook();
                console.log(`The book " ${bookTitle}" is returned....`)

            }
        });
    }

    listAvailableBooks()    //List all available books in the library.
    {
        console.log("Available Books -->");
        for(let i=0; i < this.#bookArray.length; i++)
        {
            if(this.#bookArray[i].getAvailable()=='Available')
            console.log(this.#bookArray[i].getTitle());
        }
        console.log("-------------------");
        
    }



}







//=======Objects Creation and Method Callouts=================

let library = new Library();

library.addBook(new Book('1984', 'George Orwell'));
library.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald'));

library.listAvailableBooks(); // Lists all available books


library.borrowBook('1984'); // Borrows '1984'
library.listAvailableBooks(); // Lists remaining available books

library.returnBook('1984'); // Returns '1984'
library.listAvailableBooks(); // Lists all available books again



