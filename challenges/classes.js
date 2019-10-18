// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(cubiclength) {
    // Using cube property to assign same value to length, width and height. No need to change methods.
    super(cubiclength);
    this.length = cubiclength;
    this.width = cubiclength;
    this.height = cubiclength;
  }
}

const cube = new CubeMaker(5);
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150
console.log(cube);
