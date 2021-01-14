import { DatasourceGroupItem } from '../../datasourceSidebar/DatasourceSidebar.types';

export type DragObjectType = DatasourceGroupItem & {
  type: string;
};

export type DropablePlaceholderCollectProps = {
  isOver: boolean;
  isDrag: boolean;
};

export type DropablePlaceholderProps = {
  hidePlaceholder?: boolean;
  onDrop: (item: DatasourceGroupItem) => void | undefined;
  disabled?: boolean;
};
