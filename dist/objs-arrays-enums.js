"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'yota',
    age: 30,
    hobbies: ['sports', 'Cooking'],
    role: Role.ADMIN,
};
let favoriteActivity;
favoriteActivity = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("管理者ユーザー");
}
//# sourceMappingURL=objs-arrays-enums.js.map