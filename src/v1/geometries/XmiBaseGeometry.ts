import { XmiBaseEntity } from "../XmiBase";

export class XmiBaseGeometry extends XmiBaseEntity {
  // TypeScript uses a constructor for initialization
  constructor(
    id: string | null = null,
    name: string | null = null,
    ifcguid: string | null = null,
    description: string | null = null,
    entityType: string = "XmiBaseGeometry"
  ) {
    super(id, name, ifcguid, description, entityType);
  }

  // Inherits getters and setters from XmiBaseEntity
  // Add additional getters, setters, or methods specific to XmiBaseGeometry here

  // Method to get attributes needed
  get attributesNeeded(): string[] {
    // This method can be customized as needed
    return ["id", "name", "ifcguid", "description", "entityType"];
  }
}
