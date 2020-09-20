<template>
  <router-link
    :to="url"
    class="flex flex-col items-center justify-center elem m-4 p-4 w-auto cursor-pointer"
  >
    <img
      :alt="`Flag for ${country.name}`"
      class="h-48 rounded-lg"
      height="auto"
      width="auto"
      :src="country.flag"
    />
    <h2 class="font-bold text-3xl p-4 text-center">{{ country.name }}</h2>
    <div class="w-full">
      <div class="p-2 text-lg">
        <p class="font-bold inline">Population:</p>
        <p class="inline pl-2">{{ country.population }}</p>
      </div>
      <div class="p-2 text-lg">
        <p class="font-bold inline">Region:</p>
        <p class="inline pl-2">{{ country.region }}</p>
      </div>
      <div class="p-2 text-lg">
        <p class="font-bold inline">Capital:</p>
        <p class="inline pl-2">{{ country.capital }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
  computed: {
    url: function() {
      return `/country/${this.$props.country.alpha3Code}`;
    },
  },
};
</script>
