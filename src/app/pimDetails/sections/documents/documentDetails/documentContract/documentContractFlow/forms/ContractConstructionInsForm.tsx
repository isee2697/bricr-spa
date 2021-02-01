import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Menu, Typography } from 'ui/atoms';
import { DeleteIcon } from 'ui/atoms/icons';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

export function ContractConstructionInsForm() {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <FormSection
        title={formatMessage({
          id: 'pim_details.documents.construction_inspection',
        })}
        isExpandable
        isInitExpanded
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography variant="h5">
                  {formatMessage({ id: 'pim_details.documents.check_if_construction_inspection' })}
                </Typography>
              }
            />
            <Box mt={1} />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'pim_details.documents.construction_inspection_date',
                  })}
                  name="constructionInsDate"
                  disabled={!editing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <GenericField
                  disabled={!editing}
                  name="constructionInsBy"
                  label="pim_details.documents.construction_inspection_by"
                  placeholder="pim_details.documents.select_company_from_crm"
                  size="medium"
                />
              </Grid>
            </Grid>
          </AutosaveForm>
        )}
      </FormSection>
      <Menu
        id="contract-construction-ins-form-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
          color="secondary"
        />
      </Menu>
    </>
  );
}
