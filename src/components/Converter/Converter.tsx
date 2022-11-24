import React, { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import classes from './Converter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import Flag from 'react-flagkit';
// import { Rates } from '../../types/Rates';
import { Currency } from '../../types/Currency';
import { SelectCurrency } from '../SelectCurrency/SelectCurrency';

enum Convert {
  From,
  To,
};

type Props = {
  rates: any,
  // currencies: SelectCurrencyValue[] | undefined,
};

const currencies = [
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

export const Converter: React.FC<Props> = ({ rates }) => {
  const [amoutFrom, setAmoutFrom] = useState('');
  const [amoutTo, setAmoutTo] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState('PLN');
  const [currencyTo, setCurrencyTo] = useState('UAH');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, convertBy: Convert) => {
    const currentAmount = event.target.value;

    switch (convertBy) {
      case Convert.From:
        setAmoutFrom(currentAmount);

        setAmoutTo((+currentAmount * rates[currencyTo] / rates[currencyFrom]).toString());
        // setAmoutTo(currentAmount * rates[currencyTo] / rates[currencyFrom]);
        break;

      case Convert.To:
        setAmoutTo(currentAmount);

        setAmoutFrom((+currentAmount * rates[currencyFrom] / rates[currencyTo]).toString());
        // setAmoutFrom(currentAmount * rates[currencyFrom] / rates[currencyTo]);
        break;
    }
  }

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, convertBy: Convert) => {
    const currentCurrency = event.target.value;

    console.log(event);

    switch (convertBy) {
      case Convert.From:
        setCurrencyFrom(currentCurrency);

        setAmoutTo((+amoutFrom * rates[currencyTo] / rates[currentCurrency]).toString());
        // setAmoutTo(amoutFrom * rates[currencyTo] / rates[currentCurrency]);
        break;
      case Convert.To:
        setCurrencyTo(currentCurrency);

        setAmoutFrom((+amoutTo * rates[currencyFrom] / rates[currentCurrency]).toString());
        // setAmoutFrom(amoutTo * rates[currencyFrom] / rates[currentCurrency]);
        break;
    }
  }

  return (
    <section className={classes.Converter}>
      <h1 className={classes.Title}>Currency Converter</h1>

      <Box className={classes.Display}>
        <FontAwesomeIcon className={classes.ConverterIcon} icon={icon({ name: 'arrow-right-arrow-left', style: 'solid' })} beatFade={false} color={'#8900a1'} />
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            columnGap: 7,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <TextField
            id="outlined"
            select
            label="Currency"
            value={currencyFrom}
            color={'secondary'}
            onChange={(event) => handleCurrencyChange(event, Convert.From)}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.Currency}
            id="outlined-select-currency"
            select
            label="Currency"
            color={'secondary'}
            value={currencyTo}
            onChange={(event) => handleCurrencyChange(event, Convert.To)}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">From</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={amoutFrom}
              onChange={(event) => handleAmountChange(event, Convert.From)}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              color={'secondary'}
              placeholder={'0'}
            />
          </FormControl>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">To</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={amoutTo}
              onChange={(event) => handleAmountChange(event, Convert.To)}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              color={'secondary'}
              placeholder={'0'}
            />
          </FormControl>
        </Box>
      </Box>
    </section>
  )
}