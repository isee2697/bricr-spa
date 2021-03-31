import React from 'react';
import { IDocument } from 'react-doc-viewer/build/types';

import { DocumentViewer } from 'ui/atoms';
import { Modal } from 'ui/molecules/modal/Modal';
import { ModalProps } from 'ui/molecules/modal/Modal.types';

import { useStyles } from './DocumentViewModal.styles';
export const DocumentViewModal = ({
  documents,
  ...props
}: Omit<ModalProps, 'title' | 'children'> & { documents: IDocument[] }) => {
  const classes = useStyles();

  return (
    <Modal title={'common.files.preview.title'} {...props} maxWidth="lg" fullWidth>
      <DocumentViewer documents={documents} className={classes.viewer} />
    </Modal>
  );
};
