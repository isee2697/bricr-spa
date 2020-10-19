import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Modal, SubmitButton } from 'ui/molecules';
import { Button, DialogActions, DialogContent, TextField, InputAdornment, Typography, Box } from 'ui/atoms';
import { AddIcon, SearchIcon, SquareIcon, UserIcon } from 'ui/atoms/icons';
import { CheckboxGroupField, RadioGroupField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';

import { useStyles } from './LinkProfileModal.styles';
import { LinkProfileModalProps, LinkProfileType } from './LinkProfileModal.types';

export const LinkProfileModal = ({ isOpened, onClose }: LinkProfileModalProps) => {
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

  const types = Object.keys(LinkProfileType).map(type => ({
    label: formatMessage({ id: `crm.relation.link_profile.type.${type}` }),
    icon: <SquareIcon />,
    value: type,
  }));

  const handleChangeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'crm.partner.link_person' })}
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
              <Box mt={4}>
                <Typography variant="h2" className={classes.userList}>
                  {formatMessage({ id: 'crm.relation.link_profile.select_type' })}
                </Typography>
                <RadioGroupField name="type" options={types} />
              </Box>
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
