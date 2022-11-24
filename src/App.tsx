import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Converter } from './components/Converter';
import { getRates } from './api/rates';
import { Rates } from './types/Rates';
import Flag from 'react-flagkit';
import { SelectCurrency } from './components/SelectCurrency/SelectCurrency';

function App() {
  const [rates, setRates] = useState<Rates | null>();
  // const [ratesForHryvnia, setRatesForHryvnia] = useState([]);

  const formatNumber = useCallback((num: number) => num.toFixed(4), []);

  const ratesForHryvnia = useMemo(() => {
    if (rates) {
      const rateEurToUah = rates.UAH;
      const rateDollarToUah = 1 * rateEurToUah / rates.USD;

      return {
        'EUR': formatNumber(rateEurToUah),
        'USD': formatNumber(rateDollarToUah),
      }
    }
  }, [rates, formatNumber]);

  const handleLoadRates = async () => {
    try {
      const ratesFromServer = await getRates();

      setRates(ratesFromServer);
    } catch {

    }
  }

  useEffect(() => {
    handleLoadRates();
  }, []);

  return (
    <div className="App">
      <Header rates={ratesForHryvnia} />
      <Converter rates={rates} />
    </div>
  );
}

export default App;
