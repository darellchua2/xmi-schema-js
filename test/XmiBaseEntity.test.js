import { XmiBaseEntity } from "../src/index";

describe("XmiBaseEntity Tests", () => {
  it("should create an entity with default values", () => {
    const entity = new XmiBaseEntity();
    expect(entity._id).toBeNull();
    expect(entity._name).toBeNull();
    // ... other default value tests
  });

  // Add more tests for setters, getters, and other methods
});
