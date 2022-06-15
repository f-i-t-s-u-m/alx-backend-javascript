export default function iterateThroughObject(reportWithIterator) {
  let data = '';
  let n = reportWithIterator.length;
  reportWithIterator.map((x) => {
    n -= 1;
    if (n) data += `${x} | `;
    else data += x;
    return true;
  });
  return data;
}
