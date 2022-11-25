import React from 'react';
import classes from './Header.module.scss';
import { Box } from '@mui/material';
import { MainCurrency } from '../MainCurrency';

type Props = {
  rates?: { 'EUR': string, 'USD': string }
};

export const Header: React.FC<Props> = ({ rates }) => (
  <section className={classes.ExchangeRate}>
    <h1 className={classes.Title}>Exchange Rate</h1>

    <Box className={classes.Display}>
      <MainCurrency
        country="US"
        rate={rates?.USD}
        text="US dollar"
      />
      <MainCurrency
        country="EU"
        rate={rates?.EUR}
        text="Euro"
      />
    </Box>
  </section>
);
