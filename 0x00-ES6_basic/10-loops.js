export default function appendToEachArrayValue(array, appendString) {
  const data = [];
  for (const idx of array) {
    data.push(appendString + idx);
  }

  return data;
}
