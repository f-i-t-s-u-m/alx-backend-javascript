export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const pro = Object.getOwnPropertyNames(superProto).find((name) => typeof
    superProto[name] === 'function' && !Object.prototype.hasOwnProperty.call(proto, name));
    if (pro) throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {}
}
