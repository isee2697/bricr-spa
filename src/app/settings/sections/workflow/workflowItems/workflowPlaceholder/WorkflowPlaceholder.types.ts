export enum PlaceholderType {
  TRIGGER = 'Trigger',
  ACTION = 'Action',
}

export type WorkflowPlaceholderProps = {
  type: PlaceholderType;
  hovered?: boolean;
};
