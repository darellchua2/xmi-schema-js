// XmiBaseEntity.ts
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
        this._id = id;
        this._name = name;
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
// Optionally, you can also export other classes, functions, or constants from this file.
