import { XmiBaseEntity, XmiBaseRelationship } from "xmi-schema";

describe("XmiBaseEntity Tests", () => {
  it("should create an entity with default values", () => {
    const entity = new XmiBaseEntity();
    expect(entity._id).toBeNull();
    expect(entity._name).toBeNull();
    // ... other default value tests
  });

  it("should create an entity with fixedd values", () => {
    const entity = new XmiBaseEntity("1234", "test1");
    expect(entity._id).toBe("1234");
    expect(entity._name).toBe("test1");
    expect(entity._description).toBeNull();
    expect(entity._entityType).toBe("XmiBaseEntity");
    expect(entity.id).toBe("1234");
    expect(entity.name).toBe("test1");
    expect(entity.description).toBeNull();
    expect(entity.entityType).toBe("XmiBaseEntity");
    // ... other default value tests
  });

  it("Test with empty class then set it", () => {
    const entity = new XmiBaseEntity();
    entity.id = "1234";

    expect(entity.id).toBe("1234");
    // ... other default value tests
  });

  // Add more tests for setters, getters, and other methods
});

describe("XmiBaseRelationship Tests", () => {
  it("should create an entity with default values", () => {
    const entity1 = new XmiBaseEntity();
    const entity2 = new XmiBaseEntity();
    const relationship = new XmiBaseRelationship(entity1, entity2);
    expect(relationship.source).toBe(entity1);
    expect(relationship.target).toBe(entity2);
  });

  // Add more tests for setters, getters, and other methods
});
