import { FilledInput, FormControl, InputAdornment, InputLabel } from '@mui/material';
import React from 'react';
import { Convert } from '../../types/Convert';

type Props = {
  amount: string,
  onChangeAmount: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, convertBy: Convert) => void,
  convertBy: Convert,
}

export const AmountInput: React.FC<Props> = ({
  amount,
  onChangeAmount,
  convertBy,
}) => {
  return (
    <FormControl fullWidth variant="filled">
      <InputLabel htmlFor="filled-adornment-amount">
        {convertBy}
      </InputLabel>
      <FilledInput
        id="filled-adornment-amount"
        value={amount}
        onChange={(event) => onChangeAmount(event, convertBy)}
        startAdornment={<InputAdornment position="start"></InputAdornment>}
        color={'secondary'}
        placeholder={'0'}
      />
    </FormControl>
  );
};
