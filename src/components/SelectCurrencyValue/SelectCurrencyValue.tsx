import React from 'react';
import Flag from 'react-flagkit';

type Props = {
  country: string,
  text: string
};

export const SelectCurrency: React.FC<Props> = ({
  country,
  text,
}) => {
  return (
    <div className="CurrencyContainer">
      <Flag country={country} size={20} className="Flag" />
      <span>
        {text}
      </span>
    </div>
  );
};
