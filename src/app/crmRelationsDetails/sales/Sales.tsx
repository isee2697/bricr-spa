import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { SalesProps } from './Sales.types';
import { DashboardContainer } from './dashboard/DashboardContainer';
import { AcquisitionsContainer } from './acquisitions/AcquisitionsContainer';
import { OrdersContainer } from './orders/OrdersContainer';
import { QuotationsContainer } from './quotations/QuotationsContainer';
import { InvoicesContainer } from './invoices/InvoicesContainer';

export const Sales = ({ path, ...otherProps }: SalesProps) => {
  return (
    <Switch>
      <Route exact path={path} component={() => <DashboardContainer path={path} {...otherProps} />} />
      <Route path={`${path}/acquisition`} render={() => <AcquisitionsContainer path={path} {...otherProps} />} />
      <Route path={`${path}/orders`} render={() => <OrdersContainer path={path} {...otherProps} />} />} />
      <Route path={`${path}/quotation`} render={() => <QuotationsContainer path={path} {...otherProps} />} />} />
      <Route path={`${path}/invoices`} render={() => <InvoicesContainer path={path} {...otherProps} />} />} />
      <Redirect to={{ pathname: `${path}` }} />
    </Switch>
  );
};
