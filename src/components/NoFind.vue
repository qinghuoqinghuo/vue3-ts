<template>
  <div class="notFind"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class NoFind extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$imgPath: "../assets/img/";
.notFind {
  width: 100%;
  height: 100%;
  background: url(#{$imgPath}404.jpg) center center no-repeat;
}
</style>
