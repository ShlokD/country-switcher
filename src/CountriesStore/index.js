import Vuex from "vuex";
import { DARK_MODE, LIGHT_MODE } from "../common/enums";

const BASE_URL = "//restcountries.com/v2";

const transformCountry = (countryMap, country) => {
  countryMap[`${country.alpha3Code.toUpperCase()}`] = {
    alpha3Code: country.alpha3Code,
    name: country.name,
    nativeName: country.nativeName,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    flag: country.flag,
    topleveldomain: country.topLevelDomain[0],
    languages: country.languages.map((language) => language.name).join(","),
    currencies: country.currencies.map((currency) => currency.name).join(","),
    borders: country.borders,
  };

  return countryMap;
};
const makeStore = () => {
  const ERROR_MESSAGE = "No Countries Found";

  const fetchCountries = (state, url) => {
    return fetch(url)
      .then((res) => res.json())
      .then(
        (resJSON) => (state.countries = resJSON.reduce(transformCountry, {}))
      )
      .catch((err) => {
        console.error(err);
        state.error = ERROR_MESSAGE;
      });
  };

  return new Vuex.Store({
    state: {
      countries: {},
      error: "",
      mode: LIGHT_MODE,
    },
    mutations: {
      getCountries(state, name = "ind") {
        return fetchCountries(state, `${BASE_URL}/name/${name}`);
      },
      getCountriesByRegion(state, region) {
        return fetchCountries(state, `${BASE_URL}/region/${region}`);
      },
      getCountryByCode(state, code) {
        return fetchCountries(state, `${BASE_URL}/alpha?codes=${code}`);
      },
      toggleMode(state) {
        state.mode = state.mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
      },
    },
  });
};

export default makeStore;
