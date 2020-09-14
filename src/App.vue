<template>
  <div id="app" :class="className">
    <header class="flex justify-evenly">
      <p class="text-4xl font-bold">Duniya Mein Kahan?</p>
      <button v-on:click="setMode">{{ text }}</button>
    </header>
    <router-view />
  </div>
</template>

<script>
const DARK_MODE = "DARK_MODE";
const LIGHT_MODE = "LIGHT_MODE";
export default {
  name: "App",
  data() {
    return {
      className: "light",
      mode: LIGHT_MODE,
      text: "Dark Mode",
    };
  },
  methods: {
    setMode() {
      this.className = this.mode === LIGHT_MODE ? "dark" : "light";
      this.mode = this.mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
      this.text = this.mode === LIGHT_MODE ? "Dark Mode" : "Light Mode";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");
@import url("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");

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
  height: auto;
  width: 100%;
  padding: 1.5em;
  min-height: 100vh;
}

html,
body {
  height: auto;
  width: 100%;
  min-height: 100vh;
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
