import React, { useState } from 'react';
import { Box } from '@mui/material';
import classes from './Converter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Convert } from '../../types/Convert';
import { SelectCurrencyInput } from '../SelectCurrencyInput';
import { AmountInput } from '../AmountInput';
import { formatNumber } from '../../helpers/formatNumber';

type Props = {
  rates: any,
};

export const Converter: React.FC<Props> = ({ rates }) => {
  const [amoutFrom, setAmoutFrom] = useState('');
  const [amoutTo, setAmoutTo] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState('PLN');
  const [currencyTo, setCurrencyTo] = useState('UAH');

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    convertBy: Convert,
  ) => {
    const currentAmount = event.target.value;

    switch (convertBy) {
      case Convert.From:
        setAmoutFrom(currentAmount);

        setAmoutTo(formatNumber(+currentAmount * rates[currencyTo] / rates[currencyFrom]));
        break;

      case Convert.To:
        setAmoutTo(currentAmount);

        setAmoutFrom(formatNumber(+currentAmount * rates[currencyFrom] / rates[currencyTo]));
        break;
    }
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    convertBy: Convert,
  ) => {
    const currentCurrency = event.target.value;

    console.log(event);

    switch (convertBy) {
      case Convert.From:
        setCurrencyFrom(currentCurrency);

        setAmoutTo(formatNumber(+amoutFrom * rates[currencyTo] / rates[currentCurrency]));
        break;
      case Convert.To:
        setCurrencyTo(currentCurrency);

        setAmoutFrom(formatNumber(+amoutTo * rates[currencyFrom] / rates[currentCurrency]));
        break;
    }
  }

  return (
    <section className={classes.Converter}>
      <h1 className={classes.Title}>Currency Converter</h1>

      <Box className={classes.Display}>
        <FontAwesomeIcon
          className={classes.ConverterIcon}
          icon={icon({
            name: 'arrow-right-arrow-left',
            style: 'solid',
          })}
          color={'#8900a1'}
        />
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            columnGap: 7,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <SelectCurrencyInput
            currency={currencyFrom}
            onChangeCurrency={handleCurrencyChange}
            convertBy={Convert.From}
          />
          <SelectCurrencyInput
            currency={currencyTo}
            onChangeCurrency={handleCurrencyChange}
            convertBy={Convert.To}
          />
          <AmountInput
            amount={amoutFrom}
            onChangeAmount={handleAmountChange}
            convertBy={Convert.From}
          />
          <AmountInput
            amount={amoutTo}
            onChangeAmount={handleAmountChange}
            convertBy={Convert.To}
          />
        </Box>
      </Box>
    </section>
  );
};
