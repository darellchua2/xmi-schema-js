import { XmiBaseEntity } from "xmi-schema";

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
