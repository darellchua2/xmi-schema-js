export default XmiBaseEntity;
declare class XmiBaseEntity {
    constructor(id?: any, name?: any, ifcGuid?: any, description?: any, entityType?: string);
    _id: any;
    _name: any;
    _ifcGuid: any;
    _description: any;
    _entityType: string;
    set id(value: any);
    get id(): any;
    set name(value: any);
    get name(): any;
    set ifcGuid(value: any);
    get ifcGuid(): any;
    set description(value: any);
    get description(): any;
    set entityType(value: string);
    get entityType(): string;
    #private;
}
