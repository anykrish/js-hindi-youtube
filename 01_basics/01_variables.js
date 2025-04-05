// Constant variable. Its value cannot be changed later.
const accountId = 144553 

// Variable using 'let'. Its value can be reassigned later.
let accountEmail = "hitesh@google.com"

// Variable using 'var'. Avoid using 'var' due to issues with 'block scope' and 'functional scope'.
var accountPassword = "12345"

// Variable without 'let', 'const', or 'var'. This creates a global variable (not recommended).
accountCity = "Jaipur"

// Variable with 'let' but without initializing it. It will have an undefined value initially.
let accountState;

// Reassigning values to 'let' and 'var' variables.
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// Logging the constant variable to the console.
console.log(accountId);


// Displaying variables in tabular format for better visualization.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])