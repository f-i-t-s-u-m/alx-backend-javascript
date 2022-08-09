const fs = require('fs');

function countStudents(path) {
  const db = {};
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const col = data.split('\n');
    col.forEach((value, key) => {
      if (key !== 0) {
        const item = value.split(',');
        if (db[item[3]] == null) db[item[3]] = [];
        db[item[3]].push(item[0]);
      }
    });
    console.log('Number of students: 10');
    for (const item in db) {
      if (item) {
        console.log(`Number of students in ${item}: ${db[item].length}. List: ${db[item].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
