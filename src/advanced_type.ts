
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


function addd(a: number, b: number): number;
function addd(a: string, b: string): string;
function addd(a: number, b: string): string;
function addd(a: string, b: number): string;
function addd(a: Combinable, b: Combinable) {
  if(typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

interface D {
  (a: number, b: number): number;
  (a: boolean, b: string): string;
}

const solution: D = (a: any, b: any) => {
  if(typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const resultt = addd('hello', 'typescript');
resultt.split('');

const fetchedUserData = {
  id: 'u1',
  name: 'user1',
  job: {
    title: 'Developer',
    description: 'TypeScript',
  },
};

console.log(fetchedUserData?.job.title);

const userInput2 = null;

const storedData = userInput2 ?? 'DEFAULT';

console.log(storedData);


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if('privileges' in emp) {
//     console.log("Privileges: " + emp.privileges);
//   } if('startDate' in emp) {
//     console.log('StartDate: ' + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log('運転中...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('トラックを運転中...');
//   }

//   loadCargo(amount: number) {
//     console.log('荷物を乗せています...' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 =new Car();
// const v2 =new Truck();

// function useVehicle(vehicle: Vehicle) {
//   if(vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
//   vehicle.drive();
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird',
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse',
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch(animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('移動速度: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById("user-input");

// if(userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'こんにちは';
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: '正しいメールアドレスではありません。',
//   username: 'ユーザー名に記号を含めることはできません',
// };
