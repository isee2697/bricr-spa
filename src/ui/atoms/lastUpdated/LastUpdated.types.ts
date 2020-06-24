export type LastEditedBy = {
  firstName: string;
  lastName: string;
};

export type LastUpdatedProps = {
  dateUpdated?: string | null;
  updatedBy?: LastEditedBy | null;
  className?: string;
  withIcon?: boolean;
};
