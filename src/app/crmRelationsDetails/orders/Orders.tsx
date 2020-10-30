import React from 'react';
import { Redirect, Route, Switch, useHistory, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Button, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon } from 'ui/atoms/icons';

import { OrdersProps } from './Orders.types';
import { OrdersListContainer } from './list/ListContainer';

export const Orders = ({ path, onSidebarOpen, isSidebarVisible }: OrdersProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();

  const handleAddNew = () => {
    push(`${joinUrlParams(baseUrl, urlParams)}/orders/new`);
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.orders.title' })}
        to="/orders"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={handleAddNew}
          >
            {formatMessage({ id: 'crm.details.add_order' })}
          </Button>
        }
      />
      <Switch>
        <Route exact path={path} component={() => <OrdersListContainer />} />
        <Route exact path={`${path}/new`} component={() => <></>} />
        <Redirect to={{ pathname: `${path}` }} />
      </Switch>
    </>
  );
};
