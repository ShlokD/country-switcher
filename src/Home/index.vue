<template>
  <div>
    <div class="flex lg:flex-row flex-col justify-around p-6">
      <input
        aria-label="Search for a country"
        id="country-input"
        class="p-4 m-2 shadow lg:w-5/6 elem"
        placeholder="Search for a country..."
        v-on:keydown="getCountryByName"
      />
      <select
        aria-label="Select a region"
        class="m-4 p-4 shadow elem"
        v-on:change="getCountryByRegion"
      >
        <option value="" selected disabled>Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
    <p v-if="error.length > 0">{{ error }}</p>
    <div v-else class="flex lg:flex-row lg:flex-wrap flex-col">
      <country-card
        v-for="country in countries"
        :key="country.name"
        :country="country"
      ></country-card>
    </div>
  </div>
</template>

<script>
import CountryCard from "./modules/CountryCard";

export default {
  computed: {
    countries: function() {
      return Object.values(this.$store.state.countries);
    },
    error: function() {
      return this.$store.state.error;
    },
  },
  mounted() {
    this.$store.commit("getCountries");
  },
  created() {
    document.title = "Duniya Mein Kahan?";
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
:root {
  font-size: 14px;
}
</style>
