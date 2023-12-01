import { XmiBaseEntity } from "../XmiBase";
export declare class XmiBaseGeometry extends XmiBaseEntity {
    constructor(id?: string | null, name?: string | null, ifcguid?: string | null, description?: string | null, entityType?: string);
    get attributesNeeded(): string[];
}
