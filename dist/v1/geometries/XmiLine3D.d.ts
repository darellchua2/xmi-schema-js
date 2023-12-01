import { XmiPoint3D } from "./XmiPoint3D";
import { XmiBaseGeometry } from "./XmiBaseGeometry";
export declare class XmiLine3D extends XmiBaseGeometry {
    private _startPoint;
    private _endPoint;
    private _attributesNeeded;
    constructor(startPoint: XmiPoint3D, endPoint: XmiPoint3D, id?: string | null, name?: string | null, description?: string | null, ifcguid?: string | null);
    private setAttributes;
    get startPoint(): XmiPoint3D;
    set startPoint(value: XmiPoint3D);
    get endPoint(): XmiPoint3D;
    set endPoint(value: XmiPoint3D);
    fromDict(obj: Record<string, any>): XmiPoint3D;
}
