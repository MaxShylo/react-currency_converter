import React from "react";
import Flag from 'react-flagkit';
import classes from './Header.module.scss';
import { Box } from "@mui/material";

type Props = {
  rates?: { 'EUR': string, 'USD': string }
};

export const Header: React.FC<Props> = ({ rates }) => {
  return (
    <section className={classes.ExchangeRate}>
      <h1 className={classes.Title}>Exchange Rate</h1>

      <Box className={classes.Display}>
        <Box className={classes.ExchangeFrom}>
          <Box className={classes.Currency}>
            <Flag country="US" size={40} className={classes.Flag} />
            <span>US dollar</span>
          </Box>
          <span className={classes.Rate}>
            {`${rates?.USD} UAH`}
          </span>
        </Box>
        <Box className={classes.ExchangeFrom}>
          <Box className={classes.Currency}>
            <Flag country="EU" size={40} className={classes.Flag} />
            <span>
              Euro
            </span>
          </Box>
          <span className={classes.Rate}>
            {`${rates?.EUR} UAH`}
          </span>
        </Box>
      </Box>
    </section>
  )
}