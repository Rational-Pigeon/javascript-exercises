const getAge = (person) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  let age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth :
    currentYear - person.yearOfBirth;
  return age;
}

const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    oldest = getAge(oldest) >= getAge(person) ? oldest : person;
    return oldest;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
