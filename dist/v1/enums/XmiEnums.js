var XmiUnitEnum;
(function (XmiUnitEnum) {
    XmiUnitEnum["METER3"] = "m^3";
    XmiUnitEnum["METER2"] = "m^2";
    XmiUnitEnum["METER"] = "m";
    XmiUnitEnum["METER4"] = "m^4";
    XmiUnitEnum["MILLIMETER4"] = "mm^4";
    XmiUnitEnum["MILLIMETER"] = "mm";
    XmiUnitEnum["CENTIMETER"] = "cm";
    XmiUnitEnum["MILLIMETER3"] = "mm^3";
    XmiUnitEnum["MILLIMETER2"] = "mm^2";
    XmiUnitEnum["SECOND"] = "sec";
})(XmiUnitEnum || (XmiUnitEnum = {}));
class XmiSegmentType {
    constructor(name, geometryClass) {
        this.name = name;
        this.geometryClass = geometryClass;
    }
    static fromName(name) {
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
    getGeometryClass() {
        return this.geometryClass || null;
    }
}
XmiSegmentType.LINE = new XmiSegmentType("Line");
XmiSegmentType.CIRCULAR_ARC = new XmiSegmentType("Circular Arc");
XmiSegmentType.PARABOLIC_ARC = new XmiSegmentType("Parabolic Arc");
XmiSegmentType.BEZIER = new XmiSegmentType("Bezier");
XmiSegmentType.SPLINE = new XmiSegmentType("Spline");
XmiSegmentType.OTHERS = new XmiSegmentType("Others");
export { XmiUnitEnum, XmiSegmentType };
