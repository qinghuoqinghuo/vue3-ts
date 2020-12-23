<template>
  <div class="home">
    <Calendar></Calendar>
    <Timeline></Timeline>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Calendar from "@/components/Calendar.vue";
import Timeline from "@/components/Timeline.vue";
@Options({
  components: {
    Calendar,
    Timeline
  }
})
export default class Home extends Vue {}
</script>
