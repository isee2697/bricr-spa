import { ReactNode } from 'react';

import { CardWithBodyProps } from '../cardWithBody/CardWithBody.types';
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

type ActionFunction<F> = (file: F) => void;
export type ActionFunctionObject<F> = { [name: string]: { exec: ActionFunction<F>; icon?: ReactNode } };

export type CardWithFileListProps<F extends FileType> = Omit<CardWithBodyProps, 'children' | 'titleActions'> & {
  disableUpload?: boolean;
  onAdd: VoidFunction;
  view?: FileTypeView;
  files: F[];
  onUploadFiles?: (files: File[]) => void;
  actions: ActionFunctionObject<F> & {
    onEdit: { exec: ActionFunction<F> };
    onDelete: { exec: ActionFunction<F> };
  };
};

export type FileHeaderProps = {
  view: FileTypeView;
};
