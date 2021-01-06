import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';
import { Form } from 'react-final-form';
import clsx from 'classnames';

import { useLocale, useModalDispatch } from 'hooks';
import { CancelButton, Modal, MultiSearch, SubmitButton } from 'ui/molecules';
import { Alert, DialogActions, DialogContent, Box, Typography, UserAvatar } from 'ui/atoms';
import { IconButton } from 'ui/atoms/iconButton/IconButton.styles';
import { BuildingIcon, CrmIcon, GraphIcon, MenuIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { Editor } from 'app/shared/media/form/parts/Editor';
import { Chapter } from 'app/shared/media/textChapters/TextChapters.types';
import { SelectSignatureModalContainer } from '../selectSignatureModal/SelectSignatureModalContainer';
import { SelectTemplateModalContainer } from '../selectTemplateModal/SelectTemplateModalContainer';
import { MultiSearch as MultiSearchType } from 'ui/molecules/multiSearch/MultiSearch.types';
import { EmailAndName } from 'api/types';

import {
  ComposeNewEmailBody,
  ComposeNewEmailModalProps,
  EmailAndNameMultiSearchType,
} from './ComposeNewEmailModal.types';
import { useStyles } from './ComposeNewEmailModal.styles';

export const ComposeNewEmailModal = ({
  isOpened,
  onClose,
  onSubmit,
  contacts = [],
  onAddNewEmail,
}: ComposeNewEmailModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [showFrom, setShowFrom] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [showPim, setShowPim] = useState(false);
  const [showCrm, setShowCrm] = useState(false);
  const [from, setFrom] = useState<EmailAndName[]>([]);
  const [to, setTo] = useState<EmailAndName[]>([]);
  const [bcc, setBcc] = useState<EmailAndName[]>([]);
  const [cc, setCc] = useState<EmailAndName[]>([]);
  const { open } = useModalDispatch();

  const handleSendEmail = async (values: ComposeNewEmailBody & { chapter: Chapter }) => {
    return onSubmit({
      ...values,
      body: JSON.stringify(values.chapter),
      from: from[0].email,
      to: to[0].email,
      bcc: bcc.map(email => email.email).join(','),
      cc: cc.map(email => email.email).join(','),
    });
  };

  const handleChangeFrom = (values: MultiSearchType[]) => {
    setFrom(values as EmailAndNameMultiSearchType[]);
  };

  const handleChangeTo = (values: MultiSearchType[]) => {
    setTo(values as EmailAndNameMultiSearchType[]);
  };

  const handleChangeCc = (values: MultiSearchType[]) => {
    setCc(values as EmailAndNameMultiSearchType[]);
  };

  const handleChangeBcc = (values: MultiSearchType[]) => {
    setBcc(values as EmailAndNameMultiSearchType[]);
  };

  const emails: EmailAndNameMultiSearchType[] = contacts.map(contact => ({
    ...contact,
    title: `${contact.name} (${contact.email})`,
    type: '',
    icon: <UserAvatar avatar={''} name={contact.name} />,
  }));

  return (
    <>
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
                      <Box className={classes.btnSmall} mr={1} onClick={() => open('select-signature')}>
                        <Typography variant="h4">{formatMessage({ id: 'common.signature' })}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6">{formatMessage({ id: 'common.select' })}</Typography>
                      <Box className={classes.btnSmall} mr={1} onClick={() => open('select-template')}>
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
                    <Typography variant="h5">{formatMessage({ id: 'common.from' })}</Typography>
                    <MultiSearch
                      options={emails}
                      classes={{
                        root: classes.searchBox,
                        input: classes.searchBoxInput,
                      }}
                      getOptionLabel={option => option.title}
                      onChange={handleChangeFrom}
                      onAddNewOption={value => {
                        onAddNewEmail(value);
                      }}
                    />
                  </Box>
                  <Box mt={1.5}>
                    <Typography variant="h5">{formatMessage({ id: 'common.to' })}</Typography>
                    <MultiSearch
                      options={emails}
                      classes={{
                        root: classes.searchBox,
                        input: classes.searchBoxInput,
                      }}
                      getOptionLabel={option => option.title}
                      onChange={handleChangeTo}
                      onAddNewOption={value => {
                        onAddNewEmail(value);
                      }}
                    />
                  </Box>
                  <Box mt={1.5}>
                    <Typography variant="h5">{formatMessage({ id: 'common.cc' })}</Typography>
                    <MultiSearch
                      options={emails}
                      classes={{
                        root: classes.searchBox,
                        input: classes.searchBoxInput,
                      }}
                      getOptionLabel={option => option.title}
                      onChange={handleChangeCc}
                      onAddNewOption={value => {
                        onAddNewEmail(value);
                      }}
                    />
                  </Box>
                  <Box mt={1.5}>
                    <Typography variant="h5">{formatMessage({ id: 'common.bcc' })}</Typography>
                    <MultiSearch
                      options={emails}
                      classes={{
                        root: classes.searchBox,
                        input: classes.searchBoxInput,
                      }}
                      getOptionLabel={option => option.title}
                      onChange={handleChangeBcc}
                      onAddNewOption={value => {
                        onAddNewEmail(value);
                      }}
                    />
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
      <SelectSignatureModalContainer />
      <SelectTemplateModalContainer />
    </>
  );
};
