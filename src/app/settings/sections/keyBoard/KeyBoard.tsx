import React from 'react';

import { Typography, Card, CardContent, CardHeader, Grid, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { KeyBoardProps } from './Keyboard.types';
import { SettingsList } from './settingsList/SettingsList';

export const KeyBoard = ({ onSave, keyBoardSettings }: KeyBoardProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Card>
        <CardHeader title={formatMessage({ id: 'settings.key_baord.title' })} />
        <CardContent>
          <AutosaveForm onSave={onSave}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <GenericField
                    name="startNumber"
                    placeholder="settings.key_baord.start_number.placeholder"
                    label="settings.key_board.start_number"
                  />
                </Grid>
                <Grid item xs={5}></Grid>
              </Grid>
              <Box>
                <Typography variant="h5">{formatMessage({ id: 'settings.key_board.possibilities' })}</Typography>
              </Box>
            </Grid>
          </AutosaveForm>
        </CardContent>
      </Card>
      <Box mt={3} />
      <SettingsList settings={keyBoardSettings} />
    </>
  );
};
