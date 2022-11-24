const API_URL = 'https://api.apilayer.com/exchangerates_data/latest?symbols=&base=';
const myHeaders = new Headers();
myHeaders.append('apikey', 'fABaKm5UoWvIMDQcW9aLPpqPGX426y11');

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getRates = () => {
  return fetch('https://api.apilayer.com/exchangerates_data/latest?symbols=&base=', requestOptions)
    .then(response => response.json())
    .then(response => response.rates);
}
