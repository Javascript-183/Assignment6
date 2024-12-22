//ts-chek
class Shapes {
  constructor(name) {
    this.name = name;
  }

  area() {
    return `Area calculation not implemented for generic shape.`;
  }
}

class Circle extends Shapes {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shapes {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shapes {
  constructor(name, base, height) {
    super(name);
    this.base = base;
    this.height = height;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

const circle = new Circle("Area of Circle:", 5);
console.log(`${circle.name}  ${circle.area()}`);

const rectangle = new Rectangle("Area of Rectangle:", 5, 12);
console.log(`${rectangle.name}  ${rectangle.area()}`);

const triangle = new Triangle("Area of Triangle:", 5, 12);
console.log(`${triangle.name}  ${triangle.area()}`);

const shapes = new Shapes();
console.log(`${shapes.area()}`);
