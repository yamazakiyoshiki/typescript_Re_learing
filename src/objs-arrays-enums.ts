
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['sports', 'Cooking'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: 'yota',
  age: 30,
  hobbies: ['sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivity: string[];
favoriteActivity = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザー");
}