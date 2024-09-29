// chapter 69-Objects In javaScript

// What are Objects?

// 1.  Definition: 
//       In JavaScript, an Object is a collection of related data and/or functionlity.
//       These usually consist of several variables and function (which are called
//         properties and methods when they are inside objects.)

// Analogy:
//    Think of an object like a real-world object, such as a car . A car has properties
//    like color , model , and year, and it can perform actions like start , stop , or drive.

// 2. Why we use objects?

//    Organize Code:
//      Object help you group related data and functionlity together , making your code 
//      more Organized .

//    Reusability:  
//      Object allow you to reuse code . for example, you can create multiple car objects,
//      each with its own properties but with shared methods.

//    Modeling Real-world Entities:
//      objects are great for Modeling real-world Entities, like a user , a book, or a car.

// 3. How to Create an Object in JavaScript    
    
//    The simplest way to create an object is by using an object literal. This is done by
//    defining an object within curly braces {}.

//     Example:
       var car = {
        color: "red",
        model: "Toyota",
        year : 2020
       };

// 4. Accessing Object Properties:
    
//      YOU can access the properties of an object using dot notation. or bracket notation[].

//      Example:
       
        console.log(car.color);
        console.log(car["model"]);

// 5. Adding New Properties:

//      you can add new propertiest an existing object after it's created.

//      Example: 
        car.owner = "Alice";
        console.log(car.owner);

        

      
