
// const adds = (a: number = 3, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = output => {
//   console.log(output);
// };

// printOutput(adds());

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

const copiedPerson = {...persons, pref: 'tyokyo'};
console.log(persons);
console.log(copiedPerson);

const adds = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = adds(5, 10, 2);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);