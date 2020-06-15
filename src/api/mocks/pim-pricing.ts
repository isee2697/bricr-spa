export const PIM_PRICING_1 = {
  id: 'dd7000f1-fab7-4963-b41b-6c0a00daabe4',
  pricing: {
    rent: {
      isEnabled: false,
      rentalPrice: null,
      paymentFrequency: null,
      suffix: null,
      notes: null,
      conditions: null,
    },
    sale: {
      isEnabled: false,
      general: {
        prefix: 'AskingPrice',
        price: 30,
        suffix: null,
        executionSale: null,
        dateOfExecutionSale: null,
        conditions: null,
        purchaseMix: null,
        notes: null,
      },
      woz: {
        wozPrice: null,
        referenceDateWoz: null,
        notes: null,
      },
    },
  },
  costs: [] as unknown[],
  investment: {
    netRentalIncome: null,
    grossRentalIncome: null,
    economicRentalValue: null,
    averageMaturity: null,
    rentIndexed: true,
    splitApartment: true,
    averageVacancyPercentage: null,
    numberOfRentableUnits: null,
    amountOfTenants: null,
    remainingTermContacts: null,
    vacancySquareMeters: null,
    notes: null,
  },
};

export const PIM_PRICING_COST_1 = {
  id: 'e8b4618e-545b-48c0-8f21-59432936a4e7',
  serviceCosts: null,
  paymentsFrequency: null,
  vatTaxedServiceCosts: null,
  vatPercentage: null,
  notes: null,
  type: 'Custom name',
  name: 'Water',
};
