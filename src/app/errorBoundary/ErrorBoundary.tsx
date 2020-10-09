import React, { Component, ErrorInfo } from 'react';
import * as Sentry from '@sentry/browser';

import { useSnackbar } from 'hooks';

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    const { open: openSnackbar } = useSnackbar();
    super(props);

    this.state = {
      hasError: false,
    };

    const { hasError } = this.state;

    if (hasError) {
      openSnackbar({
        severity: 'success',
        message: 'lalalala',
        modalContent: <></>,
        modalTitle: 'lelelele',
        onUndo: () => {},
      });
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.REACT_APP_SENTRY_DSN) {
      Sentry.withScope(scope => {
        scope.setExtras(errorInfo);
        Sentry.captureException(error);
      });
    }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
