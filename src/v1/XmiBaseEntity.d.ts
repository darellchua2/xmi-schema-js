export default XmiBaseEntity;
declare class XmiBaseEntity {
  constructor(
    id?: string | null,
    name?: string | null,
    ifcGuid?: string | null,
    description?: string | null,
    entityType?: string
  );
  _id: string | null;
  _name: string | null;
  _ifcGuid: string | null;
  _description: string | null;
  _entityType: string;
  set id(value: string | null);
  get id(): string | null;
  set name(value: string | null);
  get name(): string | null;
  set ifcGuid(value: string | null);
  get ifcGuid(): string | null;
  set description(value: string | null);
  get description(): string | null;
  set entityType(value: string);
  get entityType(): string;
  #private;
}
