export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task10 = true; // eslint-disable-line no-unused-vars
    const task20 = false; // eslint-disable-line no-unused-vars
  }
  return [task, task2];
}
