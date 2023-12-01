import { XmiBaseGeometry } from "./XmiBaseGeometry";

export class XmiPoint3D extends XmiBaseGeometry {
  private _x: number;
  private _y: number;
  private _z: number;

  constructor(
    x: number,
    y: number,
    z: number,
    id?: string | undefined,
    name?: string | undefined,
    ifcguid?: string | undefined,
    description?: string | undefined
  ) {
    super(id, name, ifcguid, description, "XmiPoint3D");
    if (x === undefined || y === undefined || z === undefined) {
      throw new Error(
        "The parameters 'x', 'y', and 'z' are compulsory and must be provided."
      );
    }

    this._x = x;
    this._y = y;
    this._z = z;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    if (typeof value !== "number") {
      throw new TypeError("x should be a number");
    }
    this._x = value;
  }
  get y(): number {
    return this._y;
  }

  set y(value: number) {
    if (typeof value !== "number") {
      throw new TypeError("y should be a number");
    }
    this._y = value;
  }
  get z(): number {
    return this._z;
  }

  set z(value: number) {
    if (typeof value !== "number") {
      throw new TypeError("z should be a number");
    }
    this._z = value;
  }
}
