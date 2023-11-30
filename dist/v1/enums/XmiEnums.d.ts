declare enum XmiUnitEnum {
    METER3 = "m^3",
    METER2 = "m^2",
    METER = "m",
    METER4 = "m^4",
    MILLIMETER4 = "mm^4",
    MILLIMETER = "mm",
    CENTIMETER = "cm",
    MILLIMETER3 = "mm^3",
    MILLIMETER2 = "mm^2",
    SECOND = "sec"
}
declare class XmiSegmentType {
    name: string;
    geometryClass?: any;
    static LINE: XmiSegmentType;
    static CIRCULAR_ARC: XmiSegmentType;
    static PARABOLIC_ARC: XmiSegmentType;
    static BEZIER: XmiSegmentType;
    static SPLINE: XmiSegmentType;
    static OTHERS: XmiSegmentType;
    constructor(name: string, geometryClass?: any);
    static fromName(name: string): XmiSegmentType | null;
    getGeometryClass(): any | null;
}
export { XmiUnitEnum, XmiSegmentType };
