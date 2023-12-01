import { XmiBaseEntity } from "../XmiBase";
export declare class XmiBaseGeometry extends XmiBaseEntity {
    constructor(id?: string | null | undefined, name?: string | null | undefined, ifcguid?: string | null | undefined, description?: string | null | undefined, entityType?: string);
    get attributesNeeded(): string[];
}
