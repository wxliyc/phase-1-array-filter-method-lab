//* `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.




const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter( driver =>
      driver.toLowerCase() === string.toLowerCase()
    )
}
