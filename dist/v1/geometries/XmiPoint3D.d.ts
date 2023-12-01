import { XmiBaseGeometry } from "./XmiBaseGeometry";
export declare class XmiPoint3D extends XmiBaseGeometry {
    private _x;
    private _y;
    private _z;
    constructor(x: number, y: number, z: number, id?: string | undefined, name?: string | undefined, ifcguid?: string | undefined, description?: string | undefined);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
}
