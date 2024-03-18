function parseCount(value) {
    const parseValue = Number.parseFloat(value);
    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    }
    return parseValue;
}

function validateCount(value) {
    try {
        return parseCount(value)
    } catch (error) {
      return error;
    }
}

// Задание 2.

class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
  
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return parseFloat(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    let triangle;
    try {
      triangle = new Triangle(a, b, c);
    } catch (error) {
      triangle = {};
    }
  
    Object.defineProperties(triangle, {
      area: {
        get: function () {
          return 'Ошибка! Треугольник не существует';
        }
      },
      perimeter: {
        get: function () {
          return 'Ошибка! Треугольник не существует';
        }
      }
    });
  
    return triangle;
  }