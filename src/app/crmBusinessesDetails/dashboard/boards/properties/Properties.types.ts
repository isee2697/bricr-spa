export type PropertiesProps = {};

export type CrmBusiness = {
  id: string;
  property: string;
  avatar: string;
  documents: number;
  informationCompletedStatus: number;
};

export type PropertyProps = {
  property: CrmBusiness;
};
