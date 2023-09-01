const accountId=177707
let accountEmail="krishna@gmail.com"
var accountPassword="123456"
accountcity="mumbai"
let accountState;

// accountId=2 is not allowed

accountEmail="kk@gmail.com"
accountPassword=654321
accountcity="Bangalore"

console.log(accountId);

/* prefer not to use var
because of issue in block scope  and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])
