import React from 'react';
import { Box } from '@mui/material';
import Flag from 'react-flagkit';
import classes from './MainCurrency.module.scss';

type Props = {
  country: string,
  rate?: string,
  text: string,
}

export const MainCurrency: React.FC<Props> = ({
  country,
  rate,
  text 
}) => {
  return (
    <Box className={classes.ExchangeFrom}>
      <Box className={classes.Currency}>
        <Flag country={country} size={40} className={classes.Flag} />
        <span>
          {text}
        </span>
      </Box>
      <span className={classes.Rate}>
        {`${rate} UAH`}
      </span>
    </Box>
  );
};
