/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(list, city, obj) {
  const a = list.filter((x) => x.location === city)
    .reduce((acc, cur) => {
      obj.forEach((z) => {
        if (z.studentId === cur.id) {
          cur.grade = z.grade;
          acc.push(cur);
        }
      });
      return acc;
    }, []);
  return a;
}
