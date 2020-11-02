import { DmsMeta } from 'app/dms/Dms.types';

export type DmsDocumentMetaItemProps = {
  name: string;
  meta: DmsMeta;
  onRename?: (name: string) => void;
  onDelete?: VoidFunction;
};
