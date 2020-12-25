<template>
  <markdown></markdown>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import markdown from "@/components/Markdown.vue";

@Options({
  components: {
    markdown
  }
})
export default class About extends Vue {}
</script>

<style>
</style>