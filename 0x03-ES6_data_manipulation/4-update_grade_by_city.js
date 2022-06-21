/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(list, city, obj) {
  const a = list.filter((x) => x.location === city)
    .map((y) => {
      const grade = obj.find((f) => y.id === f.studentId);
      y.grade = grade ? grade.grade : 'N/A';
      return y;
    });
  return a;
}
