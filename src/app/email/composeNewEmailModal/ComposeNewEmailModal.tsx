import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';
import { Form } from 'react-final-form';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogActions, DialogContent, Box, Typography } from 'ui/atoms';
import { IconButton } from 'ui/atoms/iconButton/IconButton.styles';
import { BuildingIcon, CrmIcon, GraphIcon, MenuIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { Editor } from 'app/shared/media/form/parts/Editor';
import { Chapter } from 'app/shared/media/textChapters/TextChapters.types';

import { ComposeNewEmailBody, ComposeNewEmailModalProps } from './ComposeNewEmailModal.types';
import { useStyles } from './ComposeNewEmailModal.styles';

export const ComposeNewEmailModal = ({ isOpened, onClose, onSubmit }: ComposeNewEmailModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [showFrom, setShowFrom] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [showPim, setShowPim] = useState(false);
  const [showCrm, setShowCrm] = useState(false);

  const handleSendEmail = async (values: ComposeNewEmailBody & { chapter: Chapter }) => {
    return onSubmit({ ...values, body: JSON.stringify(values.chapter) });
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'email.compose_new_email.new_message' })}
    >
      <Form onSubmit={handleSendEmail} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                <Box display="flex">
                  <Box
                    className={clsx(classes.btnSmall, showFrom && 'selected')}
                    mr={1}
                    onClick={() => setShowFrom(!showFrom)}
                  >
                    <Typography variant="h4">{formatMessage({ id: 'common.from' })}</Typography>
                  </Box>
                  <Box
                    className={clsx(classes.btnSmall, showCc && 'selected')}
                    mr={1}
                    onClick={() => setShowCc(!showCc)}
                  >
                    <Typography variant="h4">{formatMessage({ id: 'common.cc' })}</Typography>
                  </Box>
                  <Box
                    className={clsx(classes.btnSmall, showBcc && 'selected')}
                    mr={1}
                    onClick={() => setShowBcc(!showBcc)}
                  >
                    <Typography variant="h4">{formatMessage({ id: 'common.bcc' })}</Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box>
                    <Typography variant="h6">{formatMessage({ id: 'common.select' })}</Typography>
                    <Box className={classes.btnSmall} mr={1}>
                      <Typography variant="h4">{formatMessage({ id: 'common.signature' })}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6">{formatMessage({ id: 'common.select' })}</Typography>
                    <Box className={classes.btnSmall} mr={1}>
                      <Typography variant="h4">{formatMessage({ id: 'common.template' })}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box
                    className={clsx(classes.btnSmall, showPim && 'selected')}
                    mr={1}
                    onClick={() => setShowPim(!showPim)}
                  >
                    <BuildingIcon />
                  </Box>
                  <Box
                    className={clsx(classes.btnSmall, showCrm && 'selected')}
                    mr={1}
                    onClick={() => setShowCrm(!showCrm)}
                  >
                    <CrmIcon />
                  </Box>
                  <Box className={classes.btnSmall} mr={1}>
                    <GraphIcon />
                  </Box>
                  <Box mr={1}>
                    <IconButton variant="roundedContained" size="small" onClick={() => {}}>
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <Box mt={6}>
                <Box mt={1.5}>
                  <GenericField name="from" label={formatMessage({ id: 'common.from' })} />
                </Box>
                <Box mt={1.5}>
                  <GenericField name="to" label={formatMessage({ id: 'common.to' })} />
                </Box>
                <Box mt={1.5}>
                  <GenericField name="cc" label={formatMessage({ id: 'common.cc' })} />
                </Box>
                <Box mt={1.5}>
                  <GenericField name="bcc" label={formatMessage({ id: 'common.bcc' })} />
                </Box>
                <Box mt={1.5}>
                  <GenericField name="subject" label={formatMessage({ id: 'common.subject' })} />
                </Box>
                <Box mt={1.5}>
                  <Editor disabled={false} />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <CancelButton size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                size="large"
                color="primary"
                variant="outlined"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'email.compose_new_email.save_as_concept' })}
              </SubmitButton>
              <SubmitButton
                type="submit"
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'email.compose_new_email.send' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
