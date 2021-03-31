import { ReactNode } from 'react';
import { AnyObject } from 'final-form';

import { DocumentsProps } from 'app/crmRelationsDetails/documents/Documents.types';
import { DmsFolder } from 'api/types';
import { BasePageProps } from '../Page.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type PageWithFolderListCardProps = DocumentsProps &
  BasePageProps & {
    onSidebarOpen: VoidFunction;
    isSidebarVisible: boolean;
    folders?: DmsFolder[];
    type?: 'primary' | 'secondary';
    onAddFolder?: (folderName: string) => void;
    onDeleteFolder?: (id: string) => void;
    onUpdateFolder?: (folder: DmsFolder) => void;
    onUploadFiles?: (folder: DmsFolder, files: File[]) => void;
    onFilter?: (filters: AnyObject) => void;
    activeFilters?: AnyObject;
    pagination?: PaginationProps;
    cardTitle?: string;
    cardTitleAmount?: number | string;
    cardTitleActions?: ReactNode;
    sortOptions?: string[];
    onSort?: (key: string) => void;
    onSelectFolder?: (folder: string) => void;
  };
