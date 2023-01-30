"use strict";

// Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу

// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

// Обробляти помилки(виключення)
// Використовувати try/catch

class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value > this._to) {
      throw new RangeError("to must be higher than from");
    }
    this._from = value;
  }
  get from() {
    return this._from;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value < this._from) {
      throw new RangeError("from must be lower than to");
    }
    this._to = value;
  }
  get to() {
    return this._to;
  }
  get range() {
    const array = [];
    array.push(this._from, this._to);
    return array;
  }
  validate(number) {
    if (typeof number !== "number") {
      throw new TypeError("must be number");
    }
    const array = [];
    for (let i = this._from; i <= this._to; i++) {
      array.push(i);
    }
    return array.includes(number);
  }
}

try {
  const range1 = new RangeValidator();
  console.log(range1.validate(5));
} catch (error) {
  console.log(error);
}