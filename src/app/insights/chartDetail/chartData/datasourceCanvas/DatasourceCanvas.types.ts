import { DatasourceGroupItem } from '../datasourceSidebar/DatasourceSidebar.types';

export type Point = {
  x: number;
  y: number;
};

export type DatasourceCanvasItem = {
  id: string;
  type: string;
};

export enum DatasourceCanvasType {
  xSources = 'xSources',
  ySources = 'ySources',
  breakdown = 'breakdown',
}

export type DatasourceCanvasGroups = {
  [key in DatasourceCanvasType]: DatasourceCanvasItem[];
};

export type DatasourceCanvasProps = {
  sources?: DatasourceCanvasGroups;
  sourceItems: DatasourceGroupItem[];
  onAddSource: (type: string, targetSourceGroup: DatasourceCanvasType) => void;
  onRemoveSource: (sourceId: string) => void;
};
