export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (typeof val === 'string') this._name = val;

    else throw TypeError('Name must be a string');
  }

  set length(val) {
    if (typeof val === 'number') this._name = val;

    else throw TypeError('Length must be a number');
  }

  set students(val) {
    if (Array.isArray(val)) this._name = val;

    else throw new TypeError('Students must be a array');
  }
}
