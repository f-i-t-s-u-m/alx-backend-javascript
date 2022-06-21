/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(list, city, obj) {
  const a = list.filter((x) => x.location === city)
    .reduce((acc, cur) => {
      obj.forEach((z) => {
        if (z.studentId === cur.id) {
          cur.grade = z.grade ? z.grade : 'N/A';
          acc.push(cur);
        }
      });
      return acc;
    }, []);
  return a;
}
