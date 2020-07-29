export type useCountriesType = () => useCountriesReturnProps;

export type useCountriesReturnProps = {
  countryOptions: {
    label: string;
    value: string;
  }[];
};
