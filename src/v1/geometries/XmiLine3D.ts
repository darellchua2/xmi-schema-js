import { XmiPoint3D } from "./XmiPoint3D";
import { XmiBaseGeometry } from "./XmiBaseGeometry";

export class XmiLine3D extends XmiBaseGeometry {
  private _startPoint!: XmiPoint3D;
  private _endPoint!: XmiPoint3D;

  private _attributesNeeded!: string[];

  constructor(
    startPoint: XmiPoint3D,
    endPoint: XmiPoint3D,
    id: string | null = null,
    name: string | null = null,
    description: string | null = null,
    ifcguid: string | null = null
  ) {
    const entityType = "XmiLine3D";

    super(id, name, description, ifcguid, entityType);

    this._attributesNeeded = ["startPoint", "endPoint"];

    if (typeof startPoint === undefined) {
      throw new Error(
        "The 'startPoint' parameter is compulsory and must be provided."
      );
    }

    if (typeof endPoint === undefined) {
      throw new Error(
        "The 'endPoint' parameter is compulsory and must be provided."
      );
    }

    this.setAttributes(startPoint, endPoint);
  }

  private setAttributes(startPoint: XmiPoint3D, endPoint: XmiPoint3D): void {
    const attributes: [string, XmiPoint3D][] = [
      ["startPoint", startPoint],
      ["endPoint", endPoint],
    ];

    for (const [attributeName, attributeValue] of attributes) {
      try {
        (this as any)[attributeName] = attributeValue;
      } catch (e) {
        console.log(
          `Caught an AttributeError while setting ${attributeName}: ${e}`
        );
        (this as any)[attributeName] = null;
      }
    }
  }

  get startPoint(): XmiPoint3D {
    return this._startPoint;
  }

  set startPoint(value: XmiPoint3D) {
    if (!(value instanceof XmiPoint3D)) {
      throw new TypeError("start_point should be an XmiPoint3D");
    }
    this._startPoint = value;
  }

  get endPoint(): XmiPoint3D {
    return this._endPoint;
  }

  set endPoint(value: XmiPoint3D) {
    if (!(value instanceof XmiPoint3D)) {
      throw new TypeError("end_point should be an XmiPoint3D");
    }
    this._endPoint = value;
  }

  fromDict(obj: Record<string, any>): XmiPoint3D {
    const errorLogs: Error[] = [];
    const processedData = { ...obj };

    for (const attr of this._attributesNeeded) {
      if (!obj[attr]) {
        errorLogs.push(new Error(`Missing attribute: ${attr}`));
        processedData[attr] = null;
      }
    }

    const startPointFound = processedData["startPoint"];
    const endPointFound = processedData["endPoint"];

    delete processedData["startPoint"];
    delete processedData["endPoint"];

    try {
      const instance = new XmiPoint3D(
        startPointFound,
        endPointFound,
        processedData["id"],
        processedData["name"],
        processedData["description"],
        processedData["ifcguid"]
      );
      return instance;
    } catch (e) {
      errorLogs.push(new Error(`Error instantiating XmiLine3D: ${obj}`));
      throw errorLogs;
    }
  }
}
