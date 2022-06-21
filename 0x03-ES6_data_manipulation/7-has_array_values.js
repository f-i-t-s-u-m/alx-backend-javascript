export default function hasValuesFromArray(set, array) {
  let check = true;
  array.forEach((x) => {
    if (!set.has(x)) check = false;
  }, check);
  return check;
}
