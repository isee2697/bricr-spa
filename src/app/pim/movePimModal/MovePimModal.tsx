import React from 'react';
import { Field, Form } from 'react-final-form';
import { Box, DialogActions, DialogContent, Grid } from '@material-ui/core';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Modal, SelectCard, SubmitButton } from 'ui/molecules';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { NcpType, PropertyType } from 'api/types';
import { requireValidator } from 'form/validators';
import { Avatar } from 'ui/atoms';

import { CATEGORIES } from './dictionaries';
import { useStyles } from './MovePimModal.styles';

export const MovePimModal = () => {
  const { isOpen, options: modalOptions } = useModalState('move-pim-item');
  const { close } = useModalDispatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const onSubmit = async () => {};

  const onClose = () => {
    close('move-pim-item');
  };

  const getTypes = (): { label: string; value: string }[] => {
    const category = modalOptions?.propertyCategory;

    if (category === PropertyCategory.PROPERTY) {
      return [PropertyType.House, PropertyType.Apartment, PropertyType.BuildingPlot].map(p => ({
        label: `property_types.${p}`,
        value: p,
      }));
    } else if (category === PropertyCategory.PROJECT) {
      return Object.values(NcpType).map(p => ({ label: `dictionaries.ncp_type.${p}`, value: p }));
    }

    return [];
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        category: modalOptions?.propertyCategory,
        propertyType: modalOptions?.propertyType,
      }}
    >
      {({ handleSubmit, submitErrors, values }) => (
        <Modal fullWidth isOpened={isOpen} onClose={onClose} title={formatMessage({ id: 'pim.move_pim' })}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="category" validate={requireValidator}>
              {({ input }) => (
                <>
                  <DialogContent>
                    <Grid container spacing={2}>
                      {CATEGORIES.filter(c => !input.value || input.value === c.type).map(c => (
                        <Grid xs={12} item key={c.type}>
                          <SelectCard
                            className={classes.selectCard}
                            fullWidth
                            withButton
                            onClick={() => {
                              if (input.value === c.type) {
                                input.onChange('');
                              } else {
                                input.onChange(c.type);
                              }
                            }}
                            disabled={c.disabled}
                            selected={input.value === c.type}
                          >
                            <Avatar variant="rounded" bgcolor={c.color.light}>
                              <Box color={c.color.main}>{c.icon}</Box>
                            </Avatar>
                            {formatMessage({ id: `property_categories.${c.translation}` })}
                          </SelectCard>
                        </Grid>
                      ))}
                    </Grid>
                    {input.value && (
                      <Field name="propertyType" validate={requireValidator}>
                        {({ input: category }) => (
                          <Box mt={2}>
                            <Grid container justify="center" spacing={1}>
                              {getTypes().map(p => (
                                <Grid item xs={6} md={3} key={p.value}>
                                  <SelectCard
                                    selected={category.value === p.value}
                                    centered
                                    onClick={() => category.onChange(p.value)}
                                  >
                                    {formatMessage({ id: p.label })}
                                  </SelectCard>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        )}
                      </Field>
                    )}
                  </DialogContent>
                  {input.value && (
                    <DialogActions>
                      <SubmitButton
                        disabled={!values.propertyType}
                        size="large"
                        color="primary"
                        variant="contained"
                        onClick={handleSubmit}
                      >
                        {formatMessage({ id: 'pim.move_pim' })}
                      </SubmitButton>
                    </DialogActions>
                  )}
                </>
              )}
            </Field>
          </form>
        </Modal>
      )}
    </Form>
  );
};
