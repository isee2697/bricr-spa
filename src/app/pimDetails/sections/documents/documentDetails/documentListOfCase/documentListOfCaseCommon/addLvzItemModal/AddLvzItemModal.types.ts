export type AddLvzItemModalProps = {
  onSubmit: (cardId: number, values: AddLvzItemBody) => Promise<boolean>;
};

export type AddLvzItemBody = {
  id: number;
  description: string;
};
