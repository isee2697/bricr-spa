export type PropertiesProps = {};

export type CrmReleation = {
  id: string;
  property: string;
  avatar: string;
  documents: number;
  informationCompletedStatus: number;
};

export type PropertyItemProps = {
  property: CrmReleation;
};
