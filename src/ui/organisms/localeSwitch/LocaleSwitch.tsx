import React from 'react';
import { Field } from 'react-final-form';

import { AppLocale } from 'context/locale/AppLocale.enum';
import { useAuthDispatch, useAuthState, useLocale } from 'hooks';
import { Dropdown } from 'ui/atoms';
import { SET_AUTHORIZED } from 'context/auth/authReducer/authReducer';

import { LocaleOptions } from './dictionaries';
import { LocaleSwitchProps } from './LocaleSwitch.types';

export const LocaleSwitch = ({ name = 'language', isFormField = true, ...props }: LocaleSwitchProps) => {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();
  const { setLocale, locale, formatMessage } = useLocale();

  return (
    <>
      {isFormField && (
        <Field name={name} value={locale}>
          {inputProps => (
            <Dropdown
              placeholder={formatMessage({ id: 'language.placeholder' })}
              {...props}
              {...inputProps.input}
              items={LocaleOptions}
              onChange={language => {
                user && dispatch({ type: SET_AUTHORIZED, user: { ...user, language: language.toString() } });
                inputProps.input.onChange(language);
              }}
            />
          )}
        </Field>
      )}
      {!isFormField && (
        <Dropdown
          {...props}
          items={LocaleOptions}
          placeholder={formatMessage({ id: 'language.placeholder' })}
          value={locale}
          onChange={language => setLocale(language as AppLocale)}
        />
      )}
    </>
  );
};
