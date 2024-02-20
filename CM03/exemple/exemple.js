const user = {
  name: "Jean-Michel",
  age: 42,
  "first-name": "toto",
  0: "0",
};

const user2 = {
  name: "Toto",
  age: 33,
  "first-name": "lala",
};

/**
 * acess object properties
 */
const key = "name";
console.log(key);
console.log(user[0]);
console.log(user["first-name"]);

/**
 * Destructuring object + spread operator
 */
// const name = user.name;
const { name, ...rest } = user;
const { name: user2name, ...props } = user2;
console.log(user2name);

/**
 * Delete object properties
 */
delete rest[0];
console.log(rest);

/**
 * ! Foreach does not work on object
 *
 */
// user.forEach((element) => {
//   console.log(element);
// });

/**
 * Iteration over object properties using for...in
 */
for (const key in user) {
  console.log(key);
  console.log(user[key]);
}

/**
 * Overload  prototype
 * here we add a new method to the Object prototype
 */
Object.prototype.forEach = function (callback) {
  for (const key in this) {
    // check if the property is a property of the object and not a property of the prototype
    if (this.hasOwnProperty(key)) {
      console.log(key);
      console.log(this[key]);
      callback(key, this[key]);
    }
  }
};

user.forEach((key, val) => {
  console.log(key + " : " + val);
});

/**
 * Object.keys, Object.values, Object.entries
 * Object.keys returns an array of the object's property names
 * Object.values returns an array of the object's property values
 * Object.entries returns an array of the object's property names and values
 */
const keys = Object.keys(user);
const values = Object.values(user);
const test = Object.entries(user);

/**
 * Example of iteration over the object properties using Object.entries using destructuring
 */
test.forEach(([key, value]) => {
  console.log(key);
  console.log(value);
});

/**
 * Example of iteration over the object properties using Object.entries
 */
test.forEach((val) => {
  console.log(val);
  console.log("key: ", val[0]);
  console.log("val: ", val[1]);
});

/**
 * Destructuring array
 */
const arr = [1, 2, 3];
const [un, deux] = arr;
console.log(un);
