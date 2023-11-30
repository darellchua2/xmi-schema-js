// XmiBaseEntity.js

class XmiBaseEntity {
  #id;
  #name;
  #ifcGuid;
  #description;
  #entityType;

  constructor(
    id = null,
    name = null,
    ifcGuid = null,
    description = null,
    entityType = "XmiBaseEntity"
  ) {
    this.#id = id;
    this.#name = name;
    this.#ifcGuid = ifcGuid;
    this.#description = description;
    this.#entityType = entityType;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    if (value !== null && typeof value !== "string") {
      throw new TypeError("ID should be a string or null");
    }
    this.#id = value;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value !== null && typeof value !== "string") {
      throw new TypeError("Name should be a string or null");
    }
    this.#name = value;
  }

  get ifcGuid() {
    return this.#ifcGuid;
  }

  set ifcGuid(value) {
    if (value !== null && typeof value !== "string") {
      throw new TypeError("IFCGuid should be a string or null");
    }
    this.#ifcGuid = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    if (value !== null && typeof value !== "string") {
      throw new TypeError("Description should be a string or null");
    }
    this.#description = value;
  }

  get entityType() {
    return this.#entityType;
  }

  set entityType(value) {
    if (value !== null && typeof value !== "string") {
      throw new TypeError("EntityType should be a string or null");
    }
    this.#entityType = value;
  }
}

export default XmiBaseEntity;
