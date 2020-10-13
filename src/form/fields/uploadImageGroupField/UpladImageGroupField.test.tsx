import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { render, fireEvent } from 'tests';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { UploadImageGroupField } from 'form/fields/uploadImageGroupField/UploadImageGroupField';

describe('UploadImageField', () => {
  test('allows to only one checkbox to be checked', () => {
    const { getAllByTestId } = render(
      <Form
        onSubmit={() => {}}
        initialValues={{
          test: [
            { url: 'test1', id: '1' },
            { url: 'test2', id: '2' },
          ],
        }}
        mutators={{ ...arrayMutators }}
      >
        {() => (
          <UploadImageGroupField
            name={'test'}
            entity={EntityWithFiles.Pim}
            entityID={'test'}
            removeEntity={EntityWithMultipleFiles.Pim}
            mainName="checkbox"
          />
        )}
      </Form>,
    );

    const checkboxes = getAllByTestId('image-main-checkbox') as HTMLInputElement[];
    expect(checkboxes.length).toEqual(2);

    fireEvent.click(checkboxes[0]);

    expect(checkboxes[0].classList.contains('Mui-checked')).toEqual(true);
    expect(checkboxes[1].classList.contains('Mui-checked')).toEqual(false);

    fireEvent.click(checkboxes[1]);

    expect(checkboxes[0].classList.contains('Mui-checked')).toEqual(false);
    expect(checkboxes[1].classList.contains('Mui-checked')).toEqual(true);
  });
});
