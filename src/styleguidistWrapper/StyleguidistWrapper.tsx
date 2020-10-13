import React, { ReactNode } from 'react';
import { AppProviders } from 'providers/AppProviders';

// eslint-disable-next-line import/no-default-export
export default ({ children }: { children: ReactNode }) => <AppProviders>{children}</AppProviders>;
