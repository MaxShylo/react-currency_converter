import { useEffect, useMemo, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Converter } from './components/Converter';
import { getRates } from './api/rates';
import { Rates } from './types/Rates';
import { formatNumber } from './helpers/formatNumber';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const ratesForHryvnia = useMemo(() => {
    if (rates) {
      const rateEurToUah = rates.UAH;
      const rateDollarToUah = 1 * rateEurToUah / rates.USD;

      return {
        'EUR': formatNumber(rateEurToUah),
        'USD': formatNumber(rateDollarToUah),
      }
    }
  }, [rates]);

  const handleLoadRates = async () => {
    setIsLoading(true);

    try {
      const ratesFromServer = await getRates();

      setRates(ratesFromServer);
    } catch(error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleLoadRates();
  }, []);

  return (
    <div className="App">

      {isLoading ? (
        <>
          <Backdrop
            sx={{ color: '#fff' }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      ) : (
        <>
          <Header rates={ratesForHryvnia} />
          <Converter rates={rates} />
        </>
      )}
    </div>
  );
}

export default App;
