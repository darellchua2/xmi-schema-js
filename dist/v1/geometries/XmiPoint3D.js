import { XmiBaseGeometry } from "./XmiBaseGeometry";
export class XmiPoint3D extends XmiBaseGeometry {
    constructor(x, y, z, id, name, ifcguid, description) {
        super(id, name, ifcguid, description, "XmiPoint3D");
        if (x === undefined || y === undefined || z === undefined) {
            throw new Error("The parameters 'x', 'y', and 'z' are compulsory and must be provided.");
        }
        this._x = x;
        this._y = y;
        this._z = z;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (typeof value !== "number") {
            throw new TypeError("x should be a number");
        }
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (typeof value !== "number") {
            throw new TypeError("y should be a number");
        }
        this._y = value;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        if (typeof value !== "number") {
            throw new TypeError("z should be a number");
        }
        this._z = value;
    }
}
