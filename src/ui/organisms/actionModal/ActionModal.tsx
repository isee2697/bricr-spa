import React, { useState } from 'react';

import { Button, Box, SideMenuItem } from 'ui/atoms';
import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';

import { ActionModalProps } from './ActionModal.types';
import { useStyles } from './ActionModal.styles';

export const ActionModal = ({ title, isOpened, submitText, actions, onClose, onSubmit }: ActionModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [height, setHeight] = useState(10);
  const [currentAction, setCurrentAction] = useState(actions[0].title);

  return (
    <Modal title={title} isOpened={isOpened} onClose={onClose} fullWidth>
      <Box display="flex">
        <Box className={classes.list} height={height}>
          {actions.map(({ title }) => (
            <SideMenuItem
              key={title}
              title={title}
              selected={title === currentAction}
              icon={<div />}
              onClick={() => setCurrentAction(title)}
            />
          ))}
        </Box>
        <div className={classes.rightPanel} ref={ref => setHeight(ref?.clientHeight ?? 0)}>
          <Box className={classes.content}>{actions.find(({ title }) => title === currentAction)?.content}</Box>
          <Box className={classes.buttons}>
            <Button onClick={onClose} color="primary" variant="outlined">
              {formatMessage({ id: 'common.cancel' })}
            </Button>
            <Button onClick={onSubmit} color="primary" variant="contained">
              {submitText}
            </Button>
          </Box>
        </div>
      </Box>
    </Modal>
  );
};
