<template>
  <div class="flex flex-col items-center justify-center elem">
    <img
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
  </div>
</template>

<script>
export default {
  props: ["country"],
};
</script>
