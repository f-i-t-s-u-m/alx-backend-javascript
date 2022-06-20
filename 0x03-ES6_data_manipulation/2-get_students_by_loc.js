export default function getStudentsByLocation($list, $city) {
  return $list.filter((stu) => stu.location === $city);
}
