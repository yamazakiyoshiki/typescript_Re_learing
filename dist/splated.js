"use strict";
const buttons = document.querySelector('button');
if (buttons) {
    buttons.addEventListener('click', event => {
        console.log(event);
    });
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
const resultHobby = activeHobbies.push(...hobbies);
console.log(activeHobbies);
console.log(resultHobby);
const persons = {
    name: 'Max',
    age: 30,
};
const copiedPerson = Object.assign(Object.assign({}, persons), { pref: 'tyokyo' });
console.log(persons);
console.log(copiedPerson);
const adds = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = adds(5, 10, 2);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
//# sourceMappingURL=splated.js.map