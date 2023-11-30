// XmiBaseEntity.js
class XmiBaseEntity {
    #id;
    #name;
    #ifcGuid;
    #description;
    #entityType;
    constructor(id = null, name = null, ifcGuid = null, description = null, entityType = "XmiBaseEntity") {
        this._id = id;
        this._name = name;
        this._ifcGuid = ifcGuid;
        this._description = description;
        this._entityType = entityType;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        if (value !== null && typeof value !== "string") {
            throw new TypeError("ID should be a string or null");
        }
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value !== null && typeof value !== "string") {
            throw new TypeError("Name should be a string or null");
        }
        this._name = value;
    }
    get ifcGuid() {
        return this._ifcGuid;
    }
    set ifcGuid(value) {
        if (value !== null && typeof value !== "string") {
            throw new TypeError("IFCGuid should be a string or null");
        }
        this._ifcGuid = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        if (value !== null && typeof value !== "string") {
            throw new TypeError("Description should be a string or null");
        }
        this._description = value;
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        if (value !== null && typeof value !== "string") {
            throw new TypeError("EntityType should be a string or null");
        }
        this._entityType = value;
    }
}
export default XmiBaseEntity;
