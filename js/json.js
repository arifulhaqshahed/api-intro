// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.

const student = {name: 'Kalimur Rahman', id: 12, class: 'ten', group: 'science'};
const stringified = JSON.stringify(student);
// console.log(student);
// console.log(stringified);

const converted = JSON.parse(stringified);
// console.log(converted);