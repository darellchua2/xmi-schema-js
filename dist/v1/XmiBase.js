import { v4 as uuidv4 } from "uuid";
/**
 * The XmiBaseEntity class serves as a base class for various entities in the library.
 * It includes basic properties like id, name, ifcguid, description, and entityType.
 */
export class XmiBaseEntity {
    /**
     * Constructs a new XmiBaseEntity.
     * @param id The unique identifier for the entity.
     * @param name The name of the entity.
     * @param ifcguid A globally unique identifier.
     * @param description A brief description of the entity.
     * @param entityType The type of the entity.
     */
    constructor(id = null, name = null, ifcguid = null, description = null, entityType = "XmiBaseEntity") {
        this._id = id || uuidv4();
        this._name = name || this._id;
        this._ifcguid = ifcguid;
        this._description = description;
        this._entityType = entityType;
    }
    // Getters and setters for each property
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get ifcguid() {
        return this._ifcguid;
    }
    set ifcguid(value) {
        this._ifcguid = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
}
export class XmiBaseRelationship {
    constructor(source, target, name = null, entityType = "XmiRelBaseRelationship") {
        if (!(source instanceof XmiBaseEntity)) {
            throw new TypeError("'source' should be of type XmiBaseEntity");
        }
        if (!(target instanceof XmiBaseEntity)) {
            throw new TypeError("'target' should be of type XmiBaseEntity");
        }
        this._source = source;
        this._target = target;
        this._name = name;
        this._entityType = entityType;
    }
    // Getter and setter for source
    get source() {
        return this._source;
    }
    set source(source) {
        if (!(source instanceof XmiBaseEntity)) {
            throw new Error("Source must be of type XmiBaseEntity");
        }
        this._source = source;
    }
    // Getter and setter for target
    get target() {
        return this._target;
    }
    set target(target) {
        if (!(target instanceof XmiBaseEntity)) {
            throw new Error("Target must be of type XmiBaseEntity");
        }
        this._target = target;
    }
    // Getter and setter for name
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    // Getter and setter for entity type
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
}
