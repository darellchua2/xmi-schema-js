import { XmiBaseGeometry } from "xmi-schema";

describe("XmiBaseGeometry Tests", () => {
  it("should create an entity with default values", () => {
    const entity = new XmiBaseGeometry();
    expect(entity._entityType).toBe("XmiBaseGeometry");
    expect(entity._name).toBeNull();
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuidRegex.test(entity._id)).toBeTruthy();
    // ... other default value tests
  });
  // Add more tests for setters, getters, and other methods
  it("should create an entity with name values", () => {
    const entity = new XmiBaseGeometry("1234", "geometry1");
    expect(entity._entityType).toBe("XmiBaseGeometry");
    expect(entity._id).toBe("1234");
    expect(entity._name).toBe("geometry1");
    // ... other default value tests
  });
});
