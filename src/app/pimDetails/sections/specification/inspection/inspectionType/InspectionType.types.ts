export type InspectionTypes = 'Tank' | 'Pollution' | 'Maintenance';

export type InspectionTypeProps = {
  type: InspectionTypes;
  emoji: string;
  onAddCustomType: VoidFunction;
};
