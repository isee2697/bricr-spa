import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { AccountContainer } from 'app/settings/sections/general/account/Account.container';
import { BillingContainer } from 'app/settings/sections/general/billing/BillingContainer';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';

export const GeneralSettings = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb to={AppRoute.users} title={formatMessage({ id: 'settings.menu.general' })} />
      <Switch>
        <Route exact path={`${AppRoute.settingsGeneral}/account`} render={() => <AccountContainer />} />
        <Route path={`${AppRoute.settingsGeneral}/billing`} render={() => <BillingContainer />} />
        <Route path={`${AppRoute.settingsGeneral}/payment_methods`} render={() => <>Payment methods</>} />
        <Route path={`${AppRoute.settingsGeneral}/invoices`} render={() => <>Invoices</>} />
      </Switch>
    </>
  );
};
