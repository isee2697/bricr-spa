export type CrmProps = {
  type: CrmType;
  onTypeChange: (type: CrmType) => void;
};

export enum CrmType {
  Relations = 'relations',
  Businesses = 'businesses',
}
