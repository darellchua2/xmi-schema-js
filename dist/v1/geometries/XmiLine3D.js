import { XmiPoint3D } from "./XmiPoint3D";
import { XmiBaseGeometry } from "./XmiBaseGeometry";
export class XmiLine3D extends XmiBaseGeometry {
    constructor(startPoint, endPoint, id = null, name = null, description = null, ifcguid = null) {
        const entityType = "XmiLine3D";
        super(id, name, description, ifcguid, entityType);
        this._attributesNeeded = ["startPoint", "endPoint"];
        if (startPoint === undefined) {
            throw new Error("The 'startPoint' parameter is compulsory and must be provided.");
        }
        if (endPoint === undefined) {
            throw new Error("The 'endPoint' parameter is compulsory and must be provided.");
        }
        this.setAttributes(startPoint, endPoint);
    }
    setAttributes(startPoint, endPoint) {
        const attributes = [
            ["startPoint", startPoint],
            ["endPoint", endPoint],
        ];
        for (const [attributeName, attributeValue] of attributes) {
            try {
                this[attributeName] = attributeValue;
            }
            catch (e) {
                console.log(`Caught an AttributeError while setting ${attributeName}: ${e}`);
                this[attributeName] = null;
            }
        }
    }
    get startPoint() {
        return this._startPoint;
    }
    set startPoint(value) {
        if (!(value instanceof XmiPoint3D)) {
            throw new TypeError("start_point should be an XmiPoint3D");
        }
        this._startPoint = value;
    }
    get endPoint() {
        return this._endPoint;
    }
    set endPoint(value) {
        if (!(value instanceof XmiPoint3D)) {
            throw new TypeError("end_point should be an XmiPoint3D");
        }
        this._endPoint = value;
    }
    fromDict(obj) {
        const errorLogs = [];
        const processedData = Object.assign({}, obj);
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
            const instance = new XmiPoint3D(startPointFound, endPointFound, processedData["id"], processedData["name"], processedData["description"], processedData["ifcguid"]);
            return instance;
        }
        catch (e) {
            errorLogs.push(new Error(`Error instantiating XmiLine3D: ${obj}`));
            throw errorLogs;
        }
    }
}
