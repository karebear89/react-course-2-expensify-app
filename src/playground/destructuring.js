// const person = {
//     name: 'Karyn',
//     age: 31,
//     location: {
//         city: 'Greenacres',
//         temp: 90
//     }
// };
//
// // const name = person.name;
// // const age = person.age;
// const {name: firstName = 'Anonymous', age} = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
//
// if (temperature && city) {
//     console.log(`Its ${temperature} in ${city}.`);
// }
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// };
//
// const {name:publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


// const address = ['1299 S Juniper Street', 'Greenacres', 'Florida', '33467'];
// const [, city, state = 'CT'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);