/**
 * The XmiBaseEntity class serves as a base class for various entities in the library.
 * It includes basic properties like id, name, ifcguid, description, and entityType.
 */
export declare class XmiBaseEntity {
    private _id;
    private _name;
    private _ifcguid;
    private _description;
    private _entityType;
    /**
     * Constructs a new XmiBaseEntity.
     * @param id The unique identifier for the entity.
     * @param name The name of the entity.
     * @param ifcguid A globally unique identifier.
     * @param description A brief description of the entity.
     * @param entityType The type of the entity.
     */
    constructor(id?: string | null, name?: string | null, ifcguid?: string | null, description?: string | null, entityType?: string);
    get id(): string | null;
    set id(value: string | null);
    get name(): string | null;
    set name(value: string | null);
    get ifcguid(): string | null;
    set ifcguid(value: string | null);
    get description(): string | null;
    set description(value: string | null);
    get entityType(): string;
    set entityType(value: string);
}
export declare class XmiBaseRelationship {
    private _source;
    private _target;
    private _name;
    private _entityType;
    constructor(source: XmiBaseEntity, target: XmiBaseEntity, name?: string | null, entityType?: string);
    get source(): XmiBaseEntity;
    set source(source: XmiBaseEntity);
    get target(): XmiBaseEntity;
    set target(target: XmiBaseEntity);
    get name(): string | null;
    set name(name: string);
    get entityType(): string;
    set entityType(value: string);
}
