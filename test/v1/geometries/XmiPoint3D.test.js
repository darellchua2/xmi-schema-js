import { XmiPoint3D } from "xmi-schema";

describe("XmiPoint3D Tests", () => {
  it("should create an entity with default values", () => {
    const entity = new XmiPoint3D(1, 1, 1);
    expect(entity._entityType).toBe("XmiPoint3D");
    expect(typeof entity._name).toBe("string");
    expect(entity.name).toBe(entity.id);
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuidRegex.test(entity._id)).toBeTruthy();
    expect(uuidRegex.test(entity.id)).toBeTruthy();
    // ... other default value tests
  });
  it("should throw a specific error", () => {
    // Use a function to wrap the code that may throw the error
    try {
      const entity = new XmiPoint3D(1, 1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error); // Check for a specific error type (e.g., Error)
      expect(error.message).toBe(
        "The parameters 'x', 'y', and 'z' are compulsory and must be provided."
      ); // Check for a specific error message
    }
  });
});
