import React from 'react';
import { Form } from 'react-final-form';

import { render, fireEvent } from 'tests';
import { UploadImageField } from 'form/fields/uploadImageField/UploadImageField';
import { EntityWithFiles } from 'api/types';

describe('UploadImageField', () => {
  test('renders image with main checkbox', () => {
    const { getByTestId } = render(
      <Form onSubmit={() => {}} initialValues={{ test: { url: 'test' } }}>
        {() => (
          <UploadImageField
            name={'test'}
            entity={EntityWithFiles.Pim}
            entityID={'test'}
            showCheckbox
            onCheck={() => {}}
          />
        )}
      </Form>,
    );

    expect(getByTestId('image-main-checkbox')).toBeInTheDocument();
    expect(getByTestId('remove-image')).toBeInTheDocument();
  });

  test('hide remove if checkbox is checked', () => {
    const { getByTestId, queryByTestId } = render(
      <Form onSubmit={() => {}} initialValues={{ test: { url: 'test' } }}>
        {() => (
          <UploadImageField
            name={'test'}
            entity={EntityWithFiles.Pim}
            entityID={'test'}
            showCheckbox
            onCheck={() => {}}
            isChecked
          />
        )}
      </Form>,
    );

    expect(getByTestId('image-main-checkbox')).toBeInTheDocument();
    expect(queryByTestId('remove-image')).not.toBeInTheDocument();
  });

  test('checkbox fire onMainChange on click', async () => {
    const onCheck = jest.fn();
    const { getByTestId } = render(
      <Form onSubmit={() => {}} initialValues={{ test: { url: 'test' } }}>
        {() => (
          <UploadImageField
            name={'test'}
            entity={EntityWithFiles.Pim}
            entityID={'test'}
            showCheckbox
            onCheck={onCheck}
          />
        )}
      </Form>,
    );

    const checkbox = getByTestId('image-main-checkbox');
    expect(checkbox).toBeTruthy();
    fireEvent.click(checkbox);

    expect(onCheck).toBeCalled();
  });
});
