import countries from 'i18n-iso-countries';

import { useMemo } from 'react';
import { useLocale } from 'hooks';

import { useCountriesType } from './useCountries.types';

export const useCountries: useCountriesType = () => {
  const { locale } = useLocale();

  const countryOptions = useMemo(() => {
    const countriesList = countries.getNames(locale);

    return Object.keys(countriesList).map(key => {
      const name = countriesList[key];

      return {
        label: Array.isArray(name) ? name.join(' ') : name,
        value: key,
      };
    });
  }, [locale]);

  return {
    countryOptions,
  };
};
