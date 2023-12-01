import { XmiBaseEntity } from "../XmiBase";
export class XmiBaseGeometry extends XmiBaseEntity {
    // TypeScript uses a constructor for initialization
    constructor(id = null, name = null, ifcguid = null, description = null) {
        super(id, name, ifcguid, description, "XmiBaseGeometry");
    }
    // Inherits getters and setters from XmiBaseEntity
    // Add additional getters, setters, or methods specific to XmiBaseGeometry here
    // Method to get attributes needed
    get attributesNeeded() {
        // This method can be customized as needed
        return ["id", "name", "ifcguid", "description", "entityType"];
    }
}
