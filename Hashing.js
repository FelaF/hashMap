function stringToNumber(string) {
    let hashCode = 0;
    for (let i = 0; i < string.length; i++) {
      hashCode += string.charCodeAt(i);
    }
  
    return hashCode;
  }
  
  function hash(name, surname) {
    return stringToNumber(name) + stringToNumber(surname);
  }


const Hashed = hash("Fred","Smith")
console.log(Hashed)
console.log(stringToNumber("Smith"))