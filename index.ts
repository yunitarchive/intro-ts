// 1. Find Rectangle Area

function getArea (length: number, width: number){
    // Declare the variable to store result
    let result = 0;
    // Assign the value operations based on parameters that user input
    result = length * width;
    // Show the result
    return result;
}
// Call the function
let finalArea = getArea(34,21);
console.log("The calculated rectangle area is: ", finalArea);

// Get Area without function
let lengthNF = 34;
let widthNF = 21;
let resultAreaNF = lengthNF * widthNF;
console.log("The calculated rectangle area without function is: ", resultAreaNF);

// 2. Find Diameter, Circumference, Area of Circle

function getCircleAttribute(r: number){
    // Declare the operation variable to store and return in the same time in console
    const phi = 3.141592653589793;
    // Calculate the operation and assign the variable to store the result diameter
    let diameter = 2 * r;
    console.log("The diameter of this circle is: ", diameter);
    // Calculate the operation and assign the variable to store the result circumference
    let circumference = 2 * phi * r;
    console.log("The circumference of this circle is: ", circumference);
    // Calculate the operation and assign the variable to store the result area
    let area = phi * r * r;
    console.log("The area of this circle is: ", area);
}
// Call the function
getCircleAttribute(8.5);


// 3. Find angles of Triangle

function getMissingAngle(angle1: number, angle2: number){
    // Calculate the operation and assign the variable to store the result
    let result = 180 - (angle1 + angle2);
    console.log("The missing angle of this triangle is: ", result);
}
// Call the function
getMissingAngle(34, 80);


// 4. Get date difference in days
function getDifferenceDays(date1: string, date2: string): number {
  // Create Date objects from the provided date parameter
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  // Get the time difference in milliseconds
  let differenceInDays =  d2.getDate() - d1.getDate();
  return differenceInDays;
}

  //  Call function
  let date1 = "2022-09-01";
  let date2 = "2022-09-23";

  console.log("The difference in days is: ", getDifferenceDays(date1, date2));


// 5. Find Initial Name

function getInitialName(names: string){
    // Store temporary variable to store
    let resArrayWord  = names.split(" ");
    // Set destination variable
    let result = "";
    // Loop change string into array string and get the first character
    resArrayWord.forEach(name =>{
        result += name[0].toUpperCase();
    });
    console.log("The initial name of " + names + " is " + result);
}


// Call function
getInitialName("Yunita Archive");