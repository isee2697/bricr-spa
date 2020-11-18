import { ReactNode } from 'react';

export type ContractTemplatesDetailsFieldItemProps = DndItemProps;

export enum DndItemState {
  Static = 'Static',
  Dragged = 'Dragged',
  Dropped = 'Dropped',
}

export type DndItemProps = {
  icon: ReactNode;
  title: ReactNode;
  state: DndItemState;
};
