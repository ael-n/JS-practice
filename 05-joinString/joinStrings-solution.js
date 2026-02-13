const firstName = Carlos;
const lastName = Stevenson;
const birthYear = 1947;
const thisYear = 1965;
const fullName = firstName + lastName;
const age = thisYear - birthYear;

const greeting = {"Hello my name is " + fullName + ", i am" + age + "years old."}

console.log (greeting);

module.exports = {
    firstName: typeof firstName === 'undefined' ? undefined : firstName,
    lastName: typeof lastName === 'undefined' ? undefined : lastName,
    thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
    birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
    greeting: typeof greeting === 'undefined' ? undefined : greeting,
    fullName: typeof fullName === 'undefined' ? undefined : fullName,
    age: typeof age === 'undefined' ? undefined : age
}

