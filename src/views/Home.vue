<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!-- <InfiniteScroll></InfiniteScroll> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import InfiniteScroll from "@/components/infiniteScroll.vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
    // InfiniteScroll
  }
})
export default class Home extends Vue {}
</script>
