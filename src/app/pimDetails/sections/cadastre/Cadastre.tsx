import React, { useState } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button, Grid, Typography } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { AddIcon, MenuIcon, HelpIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { CadastreType, usePimCadastreQuery } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { useStyles } from './Cadastre.styles';
import { CadastralMapsContainer } from './maps/CadastralMapsContainer';
import { PlotContainer } from './plot/PlotContainer';
import { AddPlotModalContainer } from './addPlotModal/AddPlotModalContainer';

export const Cadastre = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const [isAddPlotModalOpen, setAddPlotModalOpen] = useState(false);
  const classes = useStyles();
  const { data } = usePimCadastreQuery({ variables: { id } });
  const cadastress = data?.getPimCadastre?.cadastre;

  if (!cadastress) {
    return null;
  }

  const cadastreMap = cadastress.find(data => data.type === CadastreType.CadastreMap);

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
              onClick={() => setAddPlotModalOpen(true)}
              size="small"
            >
              {formatMessage({ id: 'pim_details.cadastre.add_new_plot' })}
            </SubmitButton>
          </Box>
        }
      />
      <Grid item xs={12}>
        <Box className={classes.header}>
          <Typography variant="h1">{formatMessage({ id: 'pim_details.cadastre.title' })}</Typography>
          <Box className={classes.buttons}>
            <HelpIcon />
            <MenuIcon className={classes.iconSpacing} />
          </Box>
        </Box>
      </Grid>
      <Switch>
        <Route
          path={`${AppRoute.pimDetails}/cadastre/cadastreMap`}
          exact
          render={() => (
            <Grid item xs={12}>
              <CadastralMapsContainer cadastreItem={cadastreMap} />
            </Grid>
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/cadastre/:cadastreId`}
          exact
          render={() => (
            <Grid className={classes.plotContainer} item xs={12}>
              <PlotContainer />
            </Grid>
          )}
        />
        <Route path={`${AppRoute.pimDetails}/cadastre`} exact>
          <Redirect to={`${AppRoute.pimDetails.replace(':id', id)}/cadastre/cadastreMap`} />
        </Route>
      </Switch>
      {isAddPlotModalOpen && (
        <AddPlotModalContainer isModalOpened={isAddPlotModalOpen} onModalClose={() => setAddPlotModalOpen(false)} />
      )}
    </>
  );
};
