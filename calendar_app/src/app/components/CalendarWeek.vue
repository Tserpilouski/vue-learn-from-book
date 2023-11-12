<template>
  <div id="calendar-week" class="container">
    <div class="columns">
      <CalendarDay v-for="day in sharedState.data" :key="day.id" :day="day" />
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import CalendarDay from "./CalendarDay.vue";

export default {
  name: "CalendarWeek",
  data() {
    return {
      sharedState: store.state,
    };
  },
  components: {
    CalendarDay,
  },
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .columns {
    display: flex;
    flex-direction: row;
  }
  .column {
    width: 200px;
    padding: 0 0 0 0;
  }
}
</style>
