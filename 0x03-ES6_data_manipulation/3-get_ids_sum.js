export default function getStudentIdsSum($list) {
  const sum = 0;
  return $list.reduce((pre, cur) => pre + cur.id, sum);
}
