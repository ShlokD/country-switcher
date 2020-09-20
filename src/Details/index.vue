<template>
  <p v-if="!country.name">Loading...</p>
  <div
    v-else
    class="lg:flex lg:flex-col lg:justify-evenly lg:items-start m-4 p-4"
  >
    <router-link to="/" class="px-8 py-4 text-lg elem shadow">Back</router-link>
    <div class="flex lg:flex-row flex-col items-center justify-center m-6 p-6">
      <img
        :alt="`Flag for ${country.name}`"
        class="lg:h-1/2 lg:w-1/2 rounded-lg"
        height="auto"
        width="auto"
        :src="country.flag"
      />
      <div class="m-4 p-4">
        <h1 class="font-bold p-4 text-4xl">{{ country.name }}</h1>
        <div class="flex lg:flex-row flex-col">
          <div class="w-50">
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Native Name:</p>
              <p class="inline pl-2">{{ country.nativeName }}</p>
            </div>
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Population:</p>
              <p class="inline pl-2">{{ country.population }}</p>
            </div>
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Region:</p>
              <p class="inline pl-2 text-2xl">{{ country.region }}</p>
            </div>
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Sub Region:</p>
              <p class="inline pl-2 text-2xl">{{ country.subregion }}</p>
            </div>
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Capital:</p>
              <p class="inline pl-2 text-2xl">{{ country.capital }}</p>
            </div>
          </div>
          <div class="w-50">
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Top Level Domain:</p>
              <p class="inline pl-2 text-2xl">{{ country.topleveldomain }}</p>
            </div>
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Currencies:</p>
              <p class="inline pl-2">{{ country.currencies }}</p>
            </div>
            <div class="p-2 text-2xl">
              <p class="font-bold inline">Languages:</p>
              <p class="inline pl-2">{{ country.languages }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-row flex-wrap">
          <router-link
            class="elem p-8 m-4 shadow"
            v-for="border in country.borders"
            :key="border"
            to="`/country/${border}`"
            >{{ border }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const checkAndRoute = (route, store) => {
  const countrycode = route.params.countrycode.toUpperCase();
  const country = store.state.countries[countrycode];
  if (country) {
    return country;
  }
  store.commit("getCountryByCode", countrycode);
};

export default {
  computed: {
    country: function() {
      return checkAndRoute(this.$route, this.$store);
    },
  },
  mounted() {
    checkAndRoute(this.$route, this.$store);
  },
  created() {
    document.title = "Details";
  },
};
</script>

<style scoped>
:root {
  font-size: 16px;
}
</style>
