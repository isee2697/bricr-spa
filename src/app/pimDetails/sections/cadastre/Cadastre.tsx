import React, { useState } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { CadastreType } from 'api/types';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { useStyles } from './Cadastre.styles';
import { CadastralMapsContainer } from './maps/CadastralMapsContainer';
import { PlotContainer } from './plot/PlotContainer';
import { AddPlotModalContainer } from './addPlotModal/AddPlotModalContainer';
import { CadastreProps } from './Cadastre.types';

export const Cadastre = ({ title, isSidebarVisible, onSidebarOpen, data }: CadastreProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  const [isAddPlotModalOpen, setAddPlotModalOpen] = useState(false);

  if (!data || !data.getPimCadastre.cadastre) {
    return null;
  }

  const { cadastre } = data?.getPimCadastre;
  const cadastreMap = cadastre.find(data => data.type === CadastreType.CadastreMap);

  return (
    <>
      <NavBreadcrumb
        urlBase={baseUrl}
        to="/cadastre/cadastreMap"
        title={formatMessage({ id: 'pim_details.cadastre.title' })}
      />
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Box display="flex" flexShrink={0}>
            <Button className={classes.addPlot} color="primary" variant="outlined" onClick={() => {}} size="small">
              {formatMessage({ id: 'pim_details.cadastre.autofill_cadastre' })}
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<AddIcon color="inherit" />}
              onClick={() => setAddPlotModalOpen(true)}
              size="small"
            >
              {formatMessage({ id: 'pim_details.cadastre.add_new_plot' })}
            </Button>
          </Box>
        }
      />
      <Switch>
        <Route
          path={`${baseUrl}/cadastre/cadastreMap`}
          exact
          render={() => <CadastralMapsContainer cadastreItem={cadastreMap} />}
        />
        <Route path={`${baseUrl}/cadastre/:cadastreId`} exact render={() => <PlotContainer />} />
        <Route path={`${baseUrl}/cadastre`} exact>
          <Redirect to={`${joinUrlParams(baseUrl, urlParams)}/cadastre/cadastreMap`} />
        </Route>
      </Switch>
      {isAddPlotModalOpen && (
        <AddPlotModalContainer isModalOpened={isAddPlotModalOpen} onModalClose={() => setAddPlotModalOpen(false)} />
      )}
    </>
  );
};
