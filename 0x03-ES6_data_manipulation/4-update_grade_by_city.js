/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(list, city, obj) {
  const a = list.filter((x) => x.location === city)
    .reduce((acc, cur) => {
      const grade = obj.find((f) => f.studentId === cur.id);
      cur.grade = grade ? grade.grade : 'N/A';
      acc.push(cur);
      return acc;
    }, []);
  return a;
}
