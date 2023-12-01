import { XmiPoint3D } from "xmi-schema";
import { XmiLine3D } from "xmi-schema";

describe("XmiLine3D Tests", () => {
  it("should create an entity with default values", () => {
    const point3dStart = new XmiPoint3D(1, 1, 1);
    const point3dEnd = new XmiPoint3D(2, 2, 2);
    const line3d = new XmiLine3D(point3dStart, point3dEnd);

    expect(line3d.entityType).toBe("XmiLine3D");
    expect(line3d.startPoint).toBe(point3dStart);
    expect(line3d.endPoint).toBe(point3dEnd);
  });
  it("should create an entity with error", () => {
    const point3dStart = new XmiPoint3D(1, 1, 1);
    const point3dEnd = new XmiPoint3D(2, 2, 2);
    try {
      const line3d = new XmiLine3D(null, point3dEnd);
    } catch (error) {
      expect(error).toBeInstanceOf(Error); // Check for a specific error type (e.g., Error)
      expect(error.message).toBe(
        "The 'startPoint' parameter is compulsory and must be provided."
      );
    }
  });
});
