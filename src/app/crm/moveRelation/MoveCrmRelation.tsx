import React, { useState } from 'react';
import { Form, AnyObject, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { Modal, SimpleSearch, SubmitButton, CancelButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { Team, useSettingInfoQuery } from 'api/types';
import { DialogContent, DialogActions, Grid, Box, Typography } from 'ui/atoms';
import { CheckboxGroupField } from 'form/fields';
import { UserIcon } from 'ui/atoms/icons';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';

import { MoveCrmRelationProps } from './MoveCrmRelation.types';
import { useStyles } from './MoveCrmRelation.styles';

export const MoveCrmRelation = ({ onSubmit, isOpen }: MoveCrmRelationProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();
  const classes = useStyles();
  const { data } = useSettingInfoQuery();
  const [team, setTeam] = useState<string>('');

  const profiles = (data?.getTeams?.items as Team[]) ?? [];

  const persons = profiles.map((member: Team) => ({
    label: member?.name,
    value: member?.id,
    icon: <UserIcon />,
  })) as CheckboxDataType[];

  // const persons = [
  //   { label: 'Team Verkoop', value: '0001', icon: <UserIcon /> },
  //   { label: 'Team Aankoop', value: '0002', icon: <UserIcon /> },
  //   { label: 'Team Amsterdam - West II', value: '0003', icon: <UserIcon /> },
  // ];

  const handleSubmit = async (body: AnyObject) => {
    const response = await onSubmit(body);

    close('move-crm-relation');

    if (!response) {
      return;
    }

    return response;
  };

  const handleClose = () => {
    close('move-crm-relation');
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={{}} mutators={{ ...arrayMutators }}>
      {({ handleSubmit, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpen}
          onClose={handleClose}
          className={classes.modal}
          title={formatMessage({
            id: `crm.move_relation.title`,
            defaultMessage: formatMessage({ id: `crm.move_relation.title` }),
          })}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="object">
              {({ input }) => (
                <>
                  <DialogContent>
                    <Grid container spacing={2} justify="center">
                      <Grid xs={8}>
                        <Box mt={1} mb={4}>
                          <Typography variant="h5" className={classes.fontWeightBold}>
                            {formatMessage({ id: 'crm.move_relation.show_teams_on_filers' })}
                          </Typography>
                        </Box>
                        <Box mb={4}>
                          <SimpleSearch onChange={v => setTeam(v.currentTarget.value)} value={team} />
                        </Box>
                        <CheckboxGroupField
                          options={persons}
                          name="teams"
                          orientation="horizontal"
                          xs={12}
                          match={team}
                        />
                      </Grid>
                    </Grid>
                  </DialogContent>

                  <DialogActions>
                    <Grid container justify="space-between">
                      <Grid>
                        <CancelButton variant="outlined" color="primary" size="large" onClick={handleClose}>
                          {formatMessage({ id: 'common.cancel' })}
                        </CancelButton>
                      </Grid>
                      <Grid>
                        <SubmitButton size="large" color="primary" variant="contained" type="submit">
                          {formatMessage({ id: 'common.apply' })}
                        </SubmitButton>
                      </Grid>
                    </Grid>
                  </DialogActions>
                </>
              )}
            </Field>
          </form>
        </Modal>
      )}
    </Form>
  );
};
