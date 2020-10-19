import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Modal, SubmitButton } from 'ui/molecules';
import { Button, DialogActions, DialogContent, TextField, InputAdornment, Typography } from 'ui/atoms';
import { AddIcon, SearchIcon, UserIcon } from 'ui/atoms/icons';
import { CheckboxGroupField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';

import { useStyles } from './LinkPartnerModal.styles';
import { LinkPartnerModalProps } from './LinkPartnerModal.types';

export const LinkPartnerModal = ({ isOpened, onClose }: LinkPartnerModalProps) => {
  const [keyword, setKeyword] = useState('');
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const options: CheckboxDataType[] = [
    {
      label: 'Anna Kowalska',
      icon: <UserIcon />,
      value: '0001',
    },
  ];

  const handleChangeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'crm.partner.link_partner' })}
      className={classes.modal}
    >
      <Form onSubmit={() => {}} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, values }) => (
          <>
            <DialogContent>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder={formatMessage({ id: 'common.search' })}
                className={classes.searchField}
                onChange={handleChangeKey}
              />
              <Typography variant="h6" className={classes.userList}>
                {formatMessage({ id: 'crm.relation.search_results' })}
              </Typography>
              <CheckboxGroupField name="relations" options={options} xs={12} orientation="horizontal" match={keyword} />
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button color="ghost" size="small" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <SubmitButton
                startIcon={<AddIcon color="inherit" />}
                type="submit"
                size="large"
                color="primary"
                variant="outlined"
              >
                {formatMessage({ id: 'crm.relation.link_profile' })}
              </SubmitButton>
            </DialogActions>
          </>
        )}
      </Form>
    </Modal>
  );
};
