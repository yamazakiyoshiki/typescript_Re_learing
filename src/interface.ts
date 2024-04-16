// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let ad: AddFn;

ad = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
};

interface Greetable extends Named{
  greet(phrase: string): void;
  }

  class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
      if(n){
        this.name = n;
      }
    }

    greet(phrase: string): void {
      if(this.name) {
        console.log(phrase + ' ' + this.name);
      } else {
        console.log('Hi!');
      }
    }
  }

let user1: Greetable;

user1 = new Person();

user1.greet('Hello I am');

console.log(user1);