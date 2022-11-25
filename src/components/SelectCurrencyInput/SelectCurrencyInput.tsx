import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import { currencies } from '../../helpers/currencies';
import { Convert } from '../../types/Convert';

type Props = {
  currency: string,
  onChangeCurrency: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    convertBy: Convert
  ) => void,
  convertBy: Convert,
};

export const SelectCurrencyInput: React.FC<Props> = ({
  currency,
  onChangeCurrency,
  convertBy,
}) => {
  return (
    <TextField
      id="outlined"
      select
      label="Currency"
      value={currency}
      color={'secondary'}
      onChange={(event) => onChangeCurrency(event, convertBy)}
      helperText="Please select your currency"
    >
      {currencies.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
};
