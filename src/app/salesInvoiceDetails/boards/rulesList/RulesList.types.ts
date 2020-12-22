export type RulesListProps = {};

export type InvoiceRule = {
  id: string;
  product: string;
  description: string;
  price: number;
  quantity: number;
  vatPercentage: number;
  vatPrice: number;
  exVatPrice: number;
  totalPrice: number;
};
