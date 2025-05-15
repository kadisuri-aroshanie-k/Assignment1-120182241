/********************************************************************************
* WEB700 – Assignment 1
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Kuruwita Arachchige Dona Isuri Aroshanie Kuruwita Student ID: 120182241 Date: 2025/05/07
*
********************************************************************************/


//Manual method
let serverMethods = ["GET", "GET", "GET", "POST", "GET", "POST"]
let serverRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login"]
let serverResponses = ["Home", "Main Storefront", "Manage Products", "Registered New User", "Developed by: Student Name: Kuruwita Arachchige Dona Isuri Aroshanie Kuruwita", "User Logged In"]

function processRequest(method, route) {
  for (let i = 0; i < serverRoutes.length; i++) {
    if (serverMethods[i] === method && serverRoutes[i] === route) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${method} request for ${route}`;
}


console.log(processRequest("GET", "/")); // 200: Home
console.log(processRequest("GET", "/store")); // 200: Main Storefront
console.log(processRequest("GET", "/store-admin")); // 200: Manage Products
console.log(processRequest("POST", "/register")); // 200: Registered New User
console.log(processRequest("GET", "/developer")); // 200: Developed by: Student Name: Kuruwita Arachchige Dona Isuri Aroshanie Kuruwita
console.log(processRequest("POST", "/login")); // 200: User Logged In

// Mismatched method & route to trigger 404
console.log(processRequest("POST", "/")); // 404: Unable to process POST request for /



//Automated code
// Utility Function to get a random int between 0 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*
//server data arrays
let serverMethods = ["GET", "GET", "GET", "POST", "GET", "POST"];
let serverRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login"];
let serverResponses = [
  "Home",
  "Main Storefront",
  "Manage Products",
  "Registered New User",
  "Developed by: Student Name: Kuruwita Arachchige Dona Isuri Aroshanie Kuruwita",
  "User Logged In"
];
*/

// Main web server function
function processRequest(method, route) {
  for (let i = 0; i < serverRoutes.length; i++) {
    if (serverMethods[i] === method && serverRoutes[i] === route) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${method} request for ${route}`;
}

// According to step 6 function to automate random testing
function testRequests() {
  // test arrays
  const testMethods = ["GET", "POST"];
  const testRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login", "/notFound1", "/notFound2"];

  // Random request generator
  function randomRequest() {
    const randMethod = testMethods[getRandomInt(testMethods.length)];
    const randRoute = testRoutes[getRandomInt(testRoutes.length)];

    console.log(`Requesting: ${randMethod} ${randRoute}`);
    console.log(processRequest(randMethod, randRoute));
  }

  // Call randomRequest every 1 second
  setInterval(randomRequest, 1000);
}
testRequests();
