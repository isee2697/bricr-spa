import React from 'react';

import { AutosaveCard, Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { Company, EntityWithFiles } from 'api/types';
import { Box, Grid, InputLabel } from 'ui/atoms';
import { GenericField, UploadImageField } from 'form/fields';
import { UploadImageFieldTypes } from 'form/fields/uploadImageField/UploadImageField.types';

import { useStyles } from './Account.styles';
import { AccountProps } from './Account.types';

export const Account = ({ data, onSave }: AccountProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page title={formatMessage({ id: 'settings.account.title' })} titleActions={<></>} showHeader>
      <AutosaveCard<Company>
        title={'test'}
        data={data}
        onSave={onSave}
        isExpandable={false}
        renderChildren={editing => (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="name"
                label={formatMessage({ id: 'settings.account.company_name.label' })}
                placeholder={formatMessage({ id: 'settings.account.company_name.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField disabled={true} name="domain" label={formatMessage({ id: 'settings.account.domain' })} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="address"
                label={formatMessage({ id: 'settings.account.address.label' })}
                placeholder={formatMessage({ id: 'settings.account.address.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="addressSecondLine"
                label={formatMessage({ id: 'settings.account.address_second_line.label' })}
                placeholder={formatMessage({ id: 'settings.account.address_second_line.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="city"
                label={formatMessage({ id: 'settings.account.city.label' })}
                placeholder={formatMessage({ id: 'settings.account.city.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="state"
                label={formatMessage({ id: 'settings.account.state.label' })}
                placeholder={formatMessage({ id: 'settings.account.state.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="zipcode"
                label={formatMessage({ id: 'settings.account.zipcode.label' })}
                placeholder={formatMessage({ id: 'settings.account.zicode.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="country"
                label={formatMessage({ id: 'settings.account.country.label' })}
                placeholder={formatMessage({ id: 'settings.account.country.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="houseNumber"
                label={formatMessage({ id: 'settings.account.houseNumber.label' })}
                placeholder={formatMessage({ id: 'settings.account.houseNumber.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                type="number"
                name="floor"
                label={formatMessage({ id: 'settings.account.floor.label' })}
                placeholder={formatMessage({ id: 'settings.account.floor.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="chamberOfCommerce"
                label={formatMessage({ id: 'settings.account.chambre_of_commerce.label' })}
                placeholder={formatMessage({ id: 'settings.account.chambre_of_commerce.placeholder' })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                disabled={!editing}
                name="vat"
                label={formatMessage({ id: 'settings.account.vat.label' })}
                placeholder={formatMessage({ id: 'settings.account.vat.placeholder' })}
              />
            </Grid>
            <Grid item xs={12}>
              <Box mt={2} mb={1}>
                <InputLabel shrink variant="outlined" disabled={!editing}>
                  {formatMessage({ id: 'settings.account.logo' })}
                </InputLabel>
              </Box>

              <UploadImageField
                disabled={!editing}
                classes={{ item: classes.uploadRoot }}
                name="image"
                entity={EntityWithFiles.Company}
                entityID={data.id}
              />
            </Grid>
          </Grid>
        )}
      />
    </Page>
  );
};
