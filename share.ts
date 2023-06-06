class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(value: number) {
    if (value >= 0) {
      this.radius = value;
    } else {
      throw new Error("Radius must be a positive number.");
    }
  }
}
