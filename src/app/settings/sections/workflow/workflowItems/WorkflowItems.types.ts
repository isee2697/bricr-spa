import { ReactNode } from 'react';

export enum DndItemState {
  STATIC = 'Static',
  DRAGGED = 'Dragged',
  DROPPED = 'Dropped',
}

export type DndItemProps = {
  icon: ReactNode;
  title: ReactNode;
  state: DndItemState;
  onAction?: VoidFunction;
};
