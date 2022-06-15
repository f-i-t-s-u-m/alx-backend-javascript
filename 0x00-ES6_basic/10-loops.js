export default function appendToEachArrayValue(array, appendString) {
  return array.map((x) => appendString + x);
}
