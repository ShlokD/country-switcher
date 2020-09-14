import Vuex from "vuex";

const BASE_URL = "http://restcountries.eu/rest/v2";

const transformCountry = (country) => {
  return {
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
    flag: country.flag,
  };
};
const makeStore = () => {
  const fetchCountries = (url) => {
    return fetch(url).then((res) => res.json());
  };

  return new Vuex.Store({
    state: {
      countries: [],
      selectedCountry: 0,
    },
    mutations: {
      getCountries(state, name = "ind") {
        return fetchCountries(`${BASE_URL}/name/${name}`).then(
          (resJSON) => (state.countries = resJSON.map(transformCountry))
        );
      },
      getCountriesByRegion(state, region) {
        return fetchCountries(`${BASE_URL}/region/${region}`).then(
          (resJSON) => (state.countries = resJSON.map(transformCountry))
        );
      },
    },
  });
};

export default makeStore;
