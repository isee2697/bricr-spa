export type ChecklistProps = {
  onUpdateEmptyChecklist: (value: boolean) => void; // TODO: Remove once API integrated
  emptyChecklist: boolean; // TODO: Remove once API integrated
  items: ChecklistItem[];
};

export type ChecklistItem = {
  id: string;
  section: string;
  card: string;
  field: string;
  reason: string;
};
