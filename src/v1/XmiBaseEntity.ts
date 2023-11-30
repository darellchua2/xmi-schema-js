// XmiBaseEntity.ts

/**
 * The XmiBaseEntity class serves as a base class for various entities in the library.
 * It includes basic properties like id, name, ifcguid, description, and entityType.
 */
export class XmiBaseEntity {
  private _id: string | null;
  private _name: string | null;
  private _ifcguid: string | null;
  private _description: string | null;
  private _entityType: string;

  /**
   * Constructs a new XmiBaseEntity.
   * @param id The unique identifier for the entity.
   * @param name The name of the entity.
   * @param ifcguid A globally unique identifier.
   * @param description A brief description of the entity.
   * @param entityType The type of the entity.
   */
  constructor(
    id: string | null = null,
    name: string | null = null,
    ifcguid: string | null = null,
    description: string | null = null,
    entityType: string = "XmiBaseEntity"
  ) {
    this._id = id;
    this._name = name;
    this._ifcguid = ifcguid;
    this._description = description;
    this._entityType = entityType;
  }

  // Getters and setters for each property
  get id(): string | null {
    return this._id;
  }

  set id(value: string | null) {
    this._id = value;
  }

  get name(): string | null {
    return this._name;
  }

  set name(value: string | null) {
    this._name = value;
  }

  get ifcguid(): string | null {
    return this._ifcguid;
  }

  set ifcguid(value: string | null) {
    this._ifcguid = value;
  }

  get description(): string | null {
    return this._description;
  }

  set description(value: string | null) {
    this._description = value;
  }

  get entityType(): string {
    return this._entityType;
  }

  set entityType(value: string) {
    this._entityType = value;
  }

  // Additional methods can be added here
}

// Optionally, you can also export other classes, functions, or constants from this file.
