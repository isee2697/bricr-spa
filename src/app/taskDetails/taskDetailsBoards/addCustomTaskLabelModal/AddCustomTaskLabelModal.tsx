import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { GenericField } from 'form/fields';
import { CancelButton, IconPicker, Modal, SubmitButton } from 'ui/molecules';
import { Alert, Box, DialogActions, DialogContent, Tab, Tabs } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { requireValidator } from 'form/validators';
import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';
import { IconPickerIcon } from 'ui/molecules/iconPicker/IconPicker.types';
import { LabelInput } from 'api/types';

import { AddCustomTaskLabelModalProps, AddCustomTaskLabelModalTab } from './AddCustomTaskLabelModal.types';
import { useStyles } from './AddCustomTaskLabelModal.styles';
import { ColorPicker } from './colorPicker/ColorPicket';
import { addCustomTaskLabelIcons } from './icons';

export const AddCustomTaskLabelModal = ({
  isOpened,
  onClose,
  onSubmit,
  placeholderId,
  addText,
  iconPickerSelectedTheme,
}: AddCustomTaskLabelModalProps) => {
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState<AddCustomTaskLabelModalTab>(AddCustomTaskLabelModalTab.Icon);
  const [selectedTheme, setSelectedTheme] = useState<IconSelectedTheme>(
    iconPickerSelectedTheme || IconSelectedTheme.DEFAULT,
  );
  const classes = useStyles({ selectedTheme });

  const renderSelectedIcon = (values: Pick<LabelInput, 'text' | 'icon'>) => {
    const { icon } = values;

    const SelectedIcon: IconPickerIcon | undefined = addCustomTaskLabelIcons.find(({ name }) => name === icon);

    return <>{icon && SelectedIcon ? SelectedIcon.icon : <AddIcon fontSize="large" />}</>;
  };

  return (
    <Modal
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'tasks.details.custom_label.title' })}
      className={classes.modal}
      maxWidth="xs"
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_task.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <Box display="flex">
                <Box mr={2}>
                  <Box className={classes.iconPreview} display="flex" alignItems="center" justifyContent="center">
                    {renderSelectedIcon(values)}
                  </Box>
                </Box>
                <Box width="100%">
                  <GenericField
                    fullWidth
                    name="text"
                    label={'tasks.details.custom_label.name_of_label'}
                    placeholder={placeholderId ?? 'tasks.details.custom_label.name_of_label.placeholder'}
                    validate={[requireValidator]}
                    classes={{ root: classes.inputNameOfLabel }}
                  />
                </Box>
              </Box>

              <Tabs
                value={activeTab}
                onChange={(e, value) => setActiveTab(value)}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                classes={{ root: classes.tabs }}
              >
                <Tab
                  value={AddCustomTaskLabelModalTab.Icon}
                  label={formatMessage({ id: 'tasks.details.label.icon' })}
                />
                <Tab
                  value={AddCustomTaskLabelModalTab.Colour}
                  label={formatMessage({ id: 'tasks.details.label.colour' })}
                />
              </Tabs>
              <Box width="100%" className={classes.tabContent}>
                {activeTab === AddCustomTaskLabelModalTab.Icon && (
                  <IconPicker name="icon" iconList={addCustomTaskLabelIcons} selectedTheme={selectedTheme} />
                )}
                {activeTab === AddCustomTaskLabelModalTab.Colour && (
                  <ColorPicker selectedTheme={selectedTheme} onChangeTheme={theme => setSelectedTheme(theme)} />
                )}
              </Box>
              {/* <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box mb={1.5}>
                    <label>{formatMessage({ id: 'tasks.details.custom_label.icons_label' })}</label>
                  </Box>
                  <IconPicker name="icon" iconList={iconPickerIcons} selectedTheme={iconPickerSelectedTheme} />
                </Grid>
              </Grid> */}
            </DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {addText ?? formatMessage({ id: 'tasks.details.custom_label.add_new_label' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
