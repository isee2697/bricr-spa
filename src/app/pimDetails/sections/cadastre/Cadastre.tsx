import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button, Grid, Typography } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { AddIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AppRoute } from 'routing/AppRoute.enum';
import { CadastreType, CadastreMaps } from 'api/types';

import { CadastreProps } from './Cadastre.types';
import { useStyles } from './Cadastre.styles';
import { CadastralMaps } from './maps/CadastralMaps';
import { PlotContainer } from './plot/PlotContainer';

export const Cadastre = ({
  title,
  isSidebarVisible,
  onOpenSidebar,
  pim,
  onSave,
  onAddPlot,
  isAddPlotSubmitting,
}: CadastreProps) => {
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
            <SubmitButton
              color="primary"
              variant="contained"
              startIcon={<AddIcon color="inherit" />}
              onClick={onAddPlot}
              isLoading={isAddPlotSubmitting}
              size="small"
            >
              {formatMessage({ id: 'pim_details.cadastre.add_new_plot' })}
            </SubmitButton>
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
          {pim.cadastre &&
            pim.cadastre
              .filter(c => c.type === CadastreType.Plot)
              .map((plot, index) => (
                <Route
                  key={plot.id}
                  path={`${AppRoute.pimDetails}/cadastre/${plot.id}`}
                  exact
                  render={() => <PlotContainer plot={plot} index={index + 1} />}
                />
              ))}
          <Route
            path={`${AppRoute.pimDetails}/cadastre/cadastreMap`}
            render={() => (
              <CadastralMaps
                cadastreId={(pim && (pim.cadastre?.find(c => c.type === CadastreType.CadastreMap)?.id as string)) || ''}
                cadstralMaps={
                  (pim &&
                    (pim.cadastre?.find(c => c.type === CadastreType.CadastreMap)?.configuration as CadastreMaps)) ||
                  []
                }
              />
            )}
          />
          <Route path={`${AppRoute.pimDetails}/cadastre`} exact>
            <Redirect to={`${AppRoute.pimDetails.replace(':id', pim.id)}/cadastre/cadastreMap`} />
          </Route>
        </Switch>
      </Grid>
    </>
  );
};
