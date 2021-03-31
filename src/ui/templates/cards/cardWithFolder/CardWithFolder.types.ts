import { Dispatch, ReactNode, SetStateAction } from 'react';
import { AnyObject } from 'final-form';

import { DmsFolder } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type CardWithFolderProps = {
  isLoading: boolean;
  isError: boolean;
  foldersData?: DmsFolder[];
  type?: 'primary' | 'secondary';
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DmsFolder) => void;
  onUploadFiles?: (folder: DmsFolder, files: File[]) => void;
  setSelectedFolder: Dispatch<SetStateAction<DmsFolder | null>>;
  selectedFolder?: DmsFolder | null;
  title?: ReactNode;
  titleId?: string;
  titleAmount?: number | string;
  titleActions?: ReactNode;
  titleClass?: string;
  pagination?: PaginationProps;
  activeFilters?: AnyObject;
  onFilter?: (filters: AnyObject) => void;
  sortOptions?: string[];
  onSort?: (key: string) => void;
  onSelectFolder?: (folder: string) => void;
};
