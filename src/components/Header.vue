<template>
  <div id="Header" class="header">
   <el-avatar icon="el-icon-user-solid" size="medium"></el-avatar>
    <span class="header-item">admin</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String
  }
})
export default class Header extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  color:#ccc;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &-item {
    margin:0 15px;
  }
}
</style>
