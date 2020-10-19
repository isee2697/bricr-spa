export type DmsDashboardBoardsSignedProps = {};

export type DmsProperty = {
  id: string;
  property: string;
  avatar: string;
  documents: number;
  informationCompletedStatus: number;
};

export type DmsDashboardBoardsPropertyProps = {
  property: DmsProperty;
};
