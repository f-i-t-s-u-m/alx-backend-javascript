export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
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

    else throw TypeError('Students must be an array');
  }
}
