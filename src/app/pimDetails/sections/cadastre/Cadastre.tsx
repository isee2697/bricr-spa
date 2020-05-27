import React from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button, Grid, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AppRoute } from 'routing/AppRoute.enum';

import { CadastreProps } from './Cadastre.types';
import { useStyles } from './Cadastre.styles';
import { CadastralMaps } from './maps/CadastralMaps';
import { Plot } from './plot/Plot';

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
              {formatMessage({ id: 'pim_details.cadastre.autofill_cadastre' })}
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<AddIcon color="inherit" />}
              onClick={() => {}}
              size="small"
            >
              {formatMessage({ id: 'pim_details.cadastre.add_new_plot' })}
            </Button>
          </Box>
        }
      />
      <Grid xs={12} item>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.cadastre.title' })}</Typography>
        <AutosaveForm onSave={() => Promise.resolve({ error: false })} subscription={{}}>
          <GenericField placeholder="pim_details.cadastre.description_placeholder" name="cadastre.description" />
        </AutosaveForm>
      </Grid>
      <Grid xs={12} item>
        <Switch>
          <Route
            path={`${AppRoute.pimDetails}/cadastre/cadastreMap`}
            exact
            render={() => <CadastralMaps cadstralMaps={(pim && pim.cadastralMaps) || []} />}
          />
          <Route path={`${AppRoute.pimDetails}/cadastre/plot`} exact render={() => <Plot />} />
          <Redirect to={`${AppRoute.pimDetails.replace(':id', id)}/cadastre/cadastreMap`} />
        </Switch>
      </Grid>
    </>
  );
};
