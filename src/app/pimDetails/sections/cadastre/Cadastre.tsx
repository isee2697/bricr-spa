import React from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button, Grid, Typography } from 'ui/atoms';
import { DownloadIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AppRoute } from 'routing/AppRoute.enum';

import { CadastreProps } from './Cadastre.types';
import { useStyles } from './Cadastre.styles';
import { Maps } from './maps/Maps';

export const Cadastre = ({ title, isSidebarVisible, onOpenSidebar, pim, onSave }: CadastreProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Box display="flex">
            <Button className={classes.addPlot} color="primary" variant="outlined" onClick={() => {}} size="small">
              {formatMessage({ id: 'pim_details.cadastre.add_new_plot' })}
            </Button>
            <Button
              color="primary"
              startIcon={<DownloadIcon color="inherit" />}
              variant="contained"
              onClick={() => {}}
              size="small"
            >
              {formatMessage({ id: 'pim_details.cadastre.autofill_cadastre' })}
            </Button>
          </Box>
        }
      />
      <Grid xs={12} item>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.cadastre.title' })}</Typography>
        <AutosaveForm onSave={() => Promise.resolve({ error: false })} subscription={{}}>
          <GenericField placeholder="pim_details.cadastre.description_placeholder" name="description" />
        </AutosaveForm>
      </Grid>
      <Grid xs={12} item>
        <Switch>
          <Route path={`${AppRoute.pimDetails}/cadastre/cadastreMap`} exact render={() => <Maps />} />
          <Redirect to={`${AppRoute.pimDetails.replace(':id', id)}/cadastre/cadastreMap`} />
        </Switch>
      </Grid>
    </>
  );
};