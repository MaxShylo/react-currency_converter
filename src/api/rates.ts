const API_URL = 'https://api.apilayer.com/exchangerates_data/latest?symbols=&base=';
const myHeaders = new Headers();
myHeaders.append('apikey', 'fABaKm5UoWvIMDQcW9aLPpqPGX426y11');

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getRates = () => {
  return fetch(API_URL, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Couldn\'t load rates from server!!! Try again, please;)');
      }
      
      return response.json();
    })
    .then(response => response.rates);
}
