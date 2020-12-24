export type ChecklistLivingSituation = {
  name: string;
  type: LivingSituationType;
};

export enum LivingSituationType {
  Resident = 'Resident',
  OwnerOccupiedHome = 'OwnerOccupiedHome',
  SocialHousing = 'SocialHousing',
  FreeSectorRentalProperty = 'FreeSectorRentalProperty',
}
