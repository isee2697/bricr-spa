export type OptionDataType = {
  label: string;
  value: string;
  criteria?: string;
};

export type CriteriaProps = {
  name: string;
  label: string;
  options: OptionDataType[];
};
