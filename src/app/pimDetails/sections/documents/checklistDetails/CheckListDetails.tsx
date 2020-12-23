import React from 'react';

import { DialogContent } from 'ui/atoms';
import { Modal } from 'ui/molecules';

import { CheckListDetailsProps } from './CheckListDetails.types';
import { useStyles } from './CheckListDetails.styles';

export const DocumentsCheckListDetails = ({ file, onClose }: CheckListDetailsProps) => {
  const classes = useStyles();

  return (
    <Modal title={file.name} isOpened fullScreen classes={{ scrollPaper: classes.dialog }} onClose={onClose}>
      <DialogContent className={classes.dialogContent} classes={{ root: classes.dialogContent }}>
        <iframe title={file.name} src={file.url} width="100%" height="100%" />
      </DialogContent>
    </Modal>
  );
};
