// const person = {
//   name: 'Helmi2',
//   age: 21,
//   location: {
//     city: 'Yogyakarta',
//     temp: 30,
//   },
// };

// const { name = 'Helmi', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self publish' } = book.publisher;

// console.log(publisherName);

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item, , medium] = items;

console.log(`A medium ${item} costs ${medium}`);

