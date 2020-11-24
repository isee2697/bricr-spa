import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { AddCrmRelationStepProps } from '../AddCrmRelationModal.types';
import { useLocale } from 'hooks';
import { useStyles } from '../AddCrmRelationModal.styles';
import { Button, DialogActions, Box, DialogContent, TextField, InputAdornment, Typography } from 'ui/atoms';
import { AddIcon, SearchIcon, UserIcon } from 'ui/atoms/icons';
import { CheckboxGroupField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';

export const SearchProfileStep = ({ onClose, onCreateNewRelation, handleGoTo }: AddCrmRelationStepProps) => {
  const [keyword, setKeyword] = useState('');
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const options: CheckboxDataType[] = [
    {
      label: 'Anna Kowalska',
      icon: <UserIcon />,
      value: '0001',
    },
    {
      label: 'Victor Martin Brochner',
      value: '2',
      icon: <UserIcon />,
    },
    {
      label: 'Martin Brochner',
      value: '3',
      icon: <UserIcon />,
    },
  ];

  const handleChangeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Form onSubmit={onCreateNewRelation} mutators={{ ...arrayMutators }}>
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
              {formatMessage({ id: 'crm.relation.add_relation.latst_in_mybricr' })}
            </Typography>
            <CheckboxGroupField name="relations" options={options} xs={12} orientation="horizontal" match={keyword} />
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button color="ghost" size="small" onClick={onClose}>
              {formatMessage({ id: 'common.cancel' })}
            </Button>
            <Box display="flex">
              <Button
                type="submit"
                size="large"
                color="primary"
                variant="outlined"
                className={classes.marginRightHalf}
                onClick={() => handleGoTo(1)}
              >
                {formatMessage({ id: 'crm.relation.add_relation.create_new' })}
              </Button>
              <Button
                color="primary"
                size="large"
                startIcon={<AddIcon color="inherit" />}
                variant="contained"
                onClick={() => handleGoTo(2)}
              >
                {formatMessage({ id: 'crm.relation.add_relation.request_mybricr_data' })}
              </Button>
            </Box>
          </DialogActions>
        </>
      )}
    </Form>
  );
};
