<template>
  <div id="app">
    <calendar-week />
    <calendar-entry />
  </div>
</template>

<script>
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarWeek from "./components/CalendarWeek.vue";
export default {
  components: { CalendarEntry, CalendarWeek },
  name: "App",
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
<style lang="scss" scoped>
#app {
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
