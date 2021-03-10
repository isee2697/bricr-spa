import { CardWithBodyProps } from '../cardWithBody/CardWithBody.types';
import { ListPimsFilters } from 'api/types';
import { Document } from 'app/crmRelationsDetails/documents/Documents.types';
import { Email } from 'app/email/Email.types';

export enum FileTypeView {
  Email = 'Email',
  File = 'File',
}

export type FileTypeBase = Document & Email;

export type FileType = FileTypeBase & {
  preview?: string;
};

export type CardWithFileListProps = Omit<CardWithBodyProps, 'children' | 'titleActions'> & {
  disableUpload?: boolean;
  onAdd: VoidFunction;
  view?: FileTypeView;
  files: FileType[];
  onUploadFiles?: (files: File[]) => void;
};

export type FileHeaderProps = {
  view: FileTypeView;
};
