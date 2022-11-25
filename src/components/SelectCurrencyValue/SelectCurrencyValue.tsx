import React from 'react';
import Flag from 'react-flagkit';
import classes from './SelectCurrencyValue.module.scss';

type Props = {
  country: string,
  text: string
};

export const SelectCurrency: React.FC<Props> = ({
  country,
  text,
}) => {
  return (
    <div className={classes.CurrencyContainer}>
      <Flag country={country} size={20} className="Flag" />
      <span>
        {text}
      </span>
    </div>
  );
};
