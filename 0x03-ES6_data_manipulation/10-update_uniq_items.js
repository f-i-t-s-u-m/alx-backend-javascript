export default function updateUniqueItems(map) {
  return map.forEach((v, k) => {
    if (v === 1) map.set(k, 100);
  });
}
