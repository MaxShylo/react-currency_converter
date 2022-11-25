import { SelectCurrency } from '../components/SelectCurrencyValue/SelectCurrencyValue';

export const currencies = [
  {
    value: 'USD',
    label: <SelectCurrency country="US" text="US dollar" />
  },
  {
    value: 'EUR',
    label: <SelectCurrency country="EU" text="Euro" />
  },
  {
    value: 'UAH',
    label: <SelectCurrency country="UA" text="UA Hryvnia" />,
  },

  {
    value: 'JYP',
    label: <SelectCurrency country="JP" text="Japan Yuan" />
  },

  {
    value: 'PLN',
    label: <SelectCurrency country="PL" text="Polish zloty" />
  },
];
