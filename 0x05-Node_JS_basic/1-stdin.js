process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (chunk) => {
  process.stdout.write('Your name is: '.concat(chunk.toString()));
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing');
});
