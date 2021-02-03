const students = [
    { id: 15, name: "kuddush" },
    { id: 16, name: "boyati" },
    { id: 17, name: "sadeshir" },
    { id: 18, name: "singer" }
];
const name = students.map(a => a.name);
const ids = students.map(b => b.id);
const bigger = students.filter(s => s.id);
const biggerId = students.filter(s => s.id > 17);

// console.log(name);
// console.log(ids);
// console.log(bigger);
console.log(biggerId);