import React, { useRef, useCallback } from 'react';
import { Form, FormSpy } from 'react-final-form';

import { AutosaveProps, KeyValuesObject, FormObject } from './AutosaveForm.types';
import { useDebounce } from './useDebounce';

const isEmpty = (obj: {} | null | undefined) => !obj || !Object.keys(obj).length;

export const AutosaveForm = ({ onSave, timeout = 1000, children, ...props }: AutosaveProps) => {
  const previousValues = useRef<KeyValuesObject<string | number>>();

  const handleDebounced = useCallback(
    ({ values }) => {
      if (
        !isEmpty(values) &&
        !isEmpty(previousValues.current) &&
        JSON.stringify(values) !== JSON.stringify(previousValues.current)
      ) {
        onSave(values);
      }

      previousValues.current = values;
    },
    [onSave],
  );

  const [debouncedCallback] = useDebounce<FormObject<string | number>>(handleDebounced, timeout);

  return (
    <Form onSubmit={() => {}} {...props}>
      {() => (
        <>
          {children}
          <FormSpy subscription={{ values: true }} onChange={debouncedCallback} />
        </>
      )}
    </Form>
  );
};
