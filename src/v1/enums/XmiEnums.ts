enum XmiUnitEnum {
  METER3 = "m^3",
  METER2 = "m^2",
  METER = "m",
  METER4 = "m^4",
  MILLIMETER4 = "mm^4",
  MILLIMETER = "mm",
  CENTIMETER = "cm",
  MILLIMETER3 = "mm^3",
  MILLIMETER2 = "mm^2",
  SECOND = "sec",
}

class XmiSegmentType {
  static LINE = new XmiSegmentType("Line");
  static CIRCULAR_ARC = new XmiSegmentType("Circular Arc");
  static PARABOLIC_ARC = new XmiSegmentType("Parabolic Arc");
  static BEZIER = new XmiSegmentType("Bezier");
  static SPLINE = new XmiSegmentType("Spline");
  static OTHERS = new XmiSegmentType("Others");

  constructor(public name: string, public geometryClass?: any) {}

  static fromName(name: string): XmiSegmentType | null {
    const values = [
      this.LINE,
      this.CIRCULAR_ARC,
      this.PARABOLIC_ARC,
      this.BEZIER,
      this.SPLINE,
      this.OTHERS,
    ];
    for (const value of values) {
      if (value.name === name) {
        return value;
      }
    }
    return null;
  }

  getGeometryClass(): any | null {
    return this.geometryClass || null;
  }
}

export { XmiUnitEnum, XmiSegmentType };
