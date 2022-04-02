<template>
  <div
    id="app"
    :class="`${ui.className} flex flex-col p-6 h-full overflow-auto`"
  >
    <header class="flex items-center justify-evenly shadow p-6">
      <router-link to="/" class="text-4xl font-bold elem"
        >Duniya Mein Kahan?</router-link
      >
      <button class="border p-4 m-4 text-2xl" v-on:click="setMode">
        {{ ui.text }}
      </button>
    </header>
    <router-view />
  </div>
</template>

<script>
import { LIGHT_MODE } from "./common/enums";

export default {
  name: "App",
  computed: {
    ui: function() {
      return {
        className: this.$store.state.mode === LIGHT_MODE ? "light" : "dark",
        text:
          this.$store.state.mode === LIGHT_MODE ? "Dark Mode" : "Light Mode",
      };
    },
  },
  methods: {
    setMode() {
      this.$store.commit("toggleMode");
    },
  },
};
</script>

<style>
:root {
  --dark-blue: hsl(209, 23%, 22%);
  --very-dark-blue: hsl(207, 26%, 17%);
  --very-dark-blue-text: hsl(200, 15%, 8%);
  --very-light-gray: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
  --dark-gray: hsl(0, 0%, 52%);
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Nunito Sans, Helvetica, Arial, sans-serif;
}

html,
body {
  margin: 0;
  height: 100%;
}

.dark {
  background-color: var(--very-dark-blue);
  color: white;
}

.light {
  background-color: var(--very-light-gray);
  color: var(--very-dark-blue-text);
}

.dark .elem {
  background-color: var(--dark-blue);
}

.light .elem {
  background-color: var(--white);
}
</style>
