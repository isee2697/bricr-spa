import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { Modal, SubmitButton } from 'ui/molecules';
import { Button, DialogActions, DialogContent, InputAdornment, TextField, Typography } from 'ui/atoms';
import { CheckboxGroupField } from 'form/fields';
import { AddIcon, HomeIcon, SearchIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';

import { LinkPropertyModalProps } from './LinkPropertyModal.types';
import { useStyles } from './LinkPropertyModal.styles';

export const LinkPropertyModal = ({ isOpened, onClose, onSubmit }: LinkPropertyModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');

  const options: CheckboxDataType[] = [
    {
      label: 'Stationsstraat 25, Amsterdam',
      icon: <HomeIcon />,
      value: '0001',
    },
    {
      label: 'Parking Lot 12, Amsterdam',
      icon: <HomeIcon />,
      value: '0002',
    },
    {
      label: 'Parking Lot 12, Amsterdam',
      icon: <HomeIcon />,
      value: '0003',
    },
  ];

  const handleChangeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
      {({ handleSubmit, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpened}
          onClose={onClose}
          title={formatMessage({ id: 'tasks.details.link_property' })}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
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
                {formatMessage({ id: 'tasks.details.latest_in_your_portfolio' })}
              </Typography>
              <CheckboxGroupField name="relations" options={options} xs={12} orientation="horizontal" match={keyword} />
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button color="ghost" size="small" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
              >
                {formatMessage({ id: 'tasks.details.link_property' })}
              </SubmitButton>
            </DialogActions>
          </form>
        </Modal>
      )}
    </Form>
  );
};
