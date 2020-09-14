<template>
  <div>
    <input
      class="text-2xl p-6 m-2 w-full"
      placeholder="Search for a country..."
      v-on:keydown="getCountryByName"
    />
    <select class="m-4 p-4" v-on:change="getCountryByRegion">
      <option value="" selected disabled>Filter By Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
    <div class="p-4 m-4" v-for="country in countries" :key="country.name">
      <country-card :country="country"></country-card>
    </div>
  </div>
</template>

<script>
import CountryCard from "./modules/CountryCard";

export default {
  computed: {
    countries: function() {
      return this.$store.state.countries;
    },
  },
  mounted() {
    this.$store.commit("getCountries");
  },
  components: {
    CountryCard,
  },
  methods: {
    getCountryByName(ev) {
      if (ev.keyCode === 13) {
        this.$store.commit("getCountries", ev.target.value);
        ev.target.value = "";
      }
    },
    getCountryByRegion(ev) {
      this.$store.commit("getCountriesByRegion", ev.target.value);
    },
  },
};
</script>

<style scoped>
* {
  font-size: 14px;
}
</style>
