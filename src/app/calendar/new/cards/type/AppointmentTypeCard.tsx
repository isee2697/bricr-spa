import React, { useState } from 'react';
import { useForm } from 'react-final-form';

import { Button, Box, Card, Typography, AvatarRowItem, Radio, Grid, FormControlLabel, UserAvatar } from 'ui/atoms';
import { BuildingIcon } from 'ui/atoms/icons';
import { requireValidator } from 'form/validators';
import { AdvancedSearchField, CheckboxField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { AppointmentType, SortDirection, AppointmentAddressType } from 'api/types';
import { PimListItem } from 'app/shared/linkedProperties/linkedPropertyModal/LinkedPropertyModal.types';

import { LinkPropertyModalContainer } from './ModalContainer';
import { useStyles } from './AppointmentTypeCard.styles';

export const AppointmentTypeCard = () => {
  const fieldName = 'assignedPimIds';
  const typeFieldName = 'appointmentType';
  const acquissitionAddressField = 'acquisitionAddressType';
  const selectedUserAddressField = 'acquisitionUserAddressField';
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isModalOpened, setModalOpened] = useState(false);
  const form = useForm();
  const values = form.getState().values;

  const assignedPims: PimListItem[] = values?.[fieldName] ?? [];
  const isAcquissition = values?.[typeFieldName] === AppointmentType.Aquisition;
  const selectedAddressType = values?.[acquissitionAddressField];
  const selectedUser = values?.[selectedUserAddressField];

  return (
    <>
      <Card>
        <AdvancedSearchField
          validate={[requireValidator]}
          items={Object.keys(AppointmentType).map(item => ({
            label: formatMessage({ id: `dictionaries.appointment.type.${item}` }),
            value: item,
          }))}
          placeholder={formatMessage({ id: 'appointment.type.placeholder' })}
          name={typeFieldName}
          label="appointment.type.label"
          align="left"
        />
        {isAcquissition && (
          <Box mt={2} mb={2}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedAddressType === AppointmentAddressType.LinkedPersonAddress}
                  value={AppointmentAddressType.LinkedPersonAddress}
                  onChange={() => form.change(acquissitionAddressField, AppointmentAddressType.LinkedPersonAddress)}
                  color="primary"
                />
              }
              label={formatMessage({ id: 'appointment.address.personal_label' })}
            />

            <Grid className={classes.ident} alignItems="center" container spacing={3}>
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedUser === 'randomId1'}
                    value="randomId1"
                    onChange={() => form.change(selectedUserAddressField, 'randomId1')}
                    color="primary"
                  />
                }
                label={
                  <Grid container alignItems="center" spacing={3}>
                    <UserAvatar name="Christian van Gils" />
                    <Grid item>Christian van Gils</Grid>
                    <Grid item className="right">
                      <CheckboxField name="appointmentOwner" label="common.owner" />
                    </Grid>
                  </Grid>
                }
              />
            </Grid>
            <Grid className={classes.ident} container spacing={3}>
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedUser === 'randomId2'}
                    value="randomId2"
                    onChange={() => form.change(selectedUserAddressField, 'randomId2')}
                    color="primary"
                  />
                }
                label={
                  <Grid container alignItems="center" spacing={3}>
                    <UserAvatar name="Simone Pit" />
                    <Grid item>Simone Pit</Grid>
                    <Grid item className="right">
                      <CheckboxField name="appointmentOwner" label="common.owner" />
                    </Grid>
                  </Grid>
                }
              />
            </Grid>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedAddressType === AppointmentAddressType.NewAcquisitionAddress}
                  value={AppointmentAddressType.NewAcquisitionAddress}
                  onChange={() => form.change(acquissitionAddressField, AppointmentAddressType.NewAcquisitionAddress)}
                  color="primary"
                />
              }
              label={formatMessage({ id: 'appointment.address.new_acquisition_label' })}
            />

            <Grid className={classes.ident} container spacing={3}>
              <Grid item xs={12}>
                <GenericField label="common.street" name="appointmentStreet" />
              </Grid>
              <Grid item xs={12} md={8}>
                <GenericField label="common.house_number" name="appointmentHouseNumber" />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericField label="common.house_number_addition" name="appointmentHouseNumberAddition" />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericField label="common.zipcode" name="appointmentZipcode" />
              </Grid>
              <Grid item xs={12} md={8}>
                <GenericField label="common.city" name="appointmentCity" />
              </Grid>
            </Grid>
          </Box>
        )}
        <Box mt={2}>
          <Typography variant="h5">{formatMessage({ id: 'appointment.link_properties_label' })}</Typography>
          <Button className={classes.button} variant="contained" color="primary" onClick={() => setModalOpened(true)}>
            Search properties
          </Button>
        </Box>
        {assignedPims?.length > 0 && (
          <Box mb={1}>
            <Typography variant="h5">{formatMessage({ id: 'appointment.already_linked_properties_label' })}</Typography>
          </Box>
        )}
        {assignedPims?.map(pim => (
          <AvatarRowItem
            onDelete={() =>
              form.change(
                fieldName,
                assignedPims.filter(item => item.id !== pim.id),
              )
            }
            icon={<BuildingIcon className={classes.icon} />}
            name={`${pim.street} ${pim.houseNumber} ${pim.city}`}
          />
        ))}
      </Card>
      <LinkPropertyModalContainer
        selected={assignedPims}
        isOpened={isModalOpened}
        onClose={values => {
          form.change(fieldName, [...assignedPims, ...values]);
          setModalOpened(false);
        }}
        refetchQueryVariables={{
          from: 0,
          limit: undefined,
          sortColumn: 'dateCreated',
          sortDirection: SortDirection.Asc,
        }}
      />
    </>
  );
};
