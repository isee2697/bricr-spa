import React from 'react';
import { act } from 'react-dom/test-utils';
import { Form } from 'react-final-form';

import { fireEvent, render, wait } from 'tests';

import { ActionModal } from './ActionModal';

describe('ActionModal', () => {
  test('renders correctly', () => {
    const onClose = jest.fn();
    const onSubmit = jest.fn();

    const { queryByText } = render(
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting }) => (
          <ActionModal
            title={'Action Modal'}
            isOpened={true}
            submitText={'Submit Form'}
            actions={[
              { key: '0', title: 'Change city', content: <div>City content</div> },
              {
                key: '1',
                title: 'Update status',
                content: <div>Update content</div>,
              },
            ]}
            onClose={onClose}
            handleSubmit={handleSubmit}
            isLoading={submitting}
          />
        )}
      </Form>,
    );

    expect(queryByText('Action Modal')).toBeInTheDocument();
    expect(queryByText('Submit Form')).toBeInTheDocument();
    expect(queryByText('Change city')).toBeInTheDocument();
    expect(queryByText('Update status')).toBeInTheDocument();
  });

  test('renders isLoading', () => {
    const onClose = jest.fn();
    const onSubmit = jest.fn();

    const { container } = render(
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting }) => (
          <ActionModal
            title={'Action Modal'}
            isOpened={true}
            submitText={'Submit Form'}
            actions={[
              { key: '0', title: 'Change city', content: <div>City content</div> },
              {
                key: '1',
                title: 'Update status',
                content: <div>Update content</div>,
              },
            ]}
            onClose={onClose}
            handleSubmit={handleSubmit}
            isLoading
          />
        )}
      </Form>,
    );

    wait(() => {
      expect(container.querySelector('.MuiCircularProgress-svg')).toBeInTheDocument();
    });
  });

  test('renders tabs', () => {
    const onClose = jest.fn();
    const onSubmit = jest.fn();

    const { queryByText } = render(
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting }) => (
          <ActionModal
            title={'Action Modal'}
            isOpened={true}
            submitText={'Submit Form'}
            actions={[
              { key: '0', title: 'Change city', content: <div>City content</div> },
              {
                key: '1',
                title: 'Update status',
                content: <div>Update content</div>,
              },
            ]}
            onClose={onClose}
            handleSubmit={handleSubmit}
            isLoading
          />
        )}
      </Form>,
    );

    wait(() => {
      expect(queryByText('City content')).toBeInTheDocument();
    });

    act(() => {
      fireEvent.click(queryByText('Update status')!);
    });

    wait(() => {
      expect(queryByText('Update content')).toBeInTheDocument();
    });
  });
});
