const fs = require('fs');

function countStudents(path) {
  const db = {};
  if (!fs.existsSync(path)) throw new Error('Cannot load the database');

  const data = fs.readFileSync(path, 'utf-8').split('\n');
  const std = data.map((col) => col.split(','))
    .filter((col, k) => k !== 0)
    .map((item) => ({
      firstName: item[0],
      lastName: item[1],
      age: item[2],
      field: item[3],
    }));

  const swe = (std.filter((item) => item.field === 'SWE'));
  const cs = (std.filter((item) => item.field === 'CS'));

  console.log(`Number of students: ${std.length}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs.map((v) => v.firstName).join(', ')}`);
  console.log(`Number of students in SWE: ${swe.length}. List: ${swe.map((v) => v.firstName).join(', ')}`);

//   for (const item in std) {
//     if (item) {
//       console.log(`Number of students in ${item.field}: ${db[item].length}. List: ${db[item].firstName.join(', ')}`);
//     }
//   }
}

module.exports = countStudents;
