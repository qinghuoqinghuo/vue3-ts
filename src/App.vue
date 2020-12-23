<template>
  <div id="index">
    <el-container v-if="$route.meta.keepAlive">
      <el-header>
        <keep-alive>
          <header-nav></header-nav>
        </keep-alive>
      </el-header>
      <el-container>
        <el-aside>
          <keep-alive>
            <left></left>
          </keep-alive>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import header from "@/components/Header.vue";
import left from "@/components/Left.vue";

export default {
  components: {
    headerNav: header,
    left: left
  }
};
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  header {
    background: #202120;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .el-container {
    height: 100%;
  }
  .el-menu {
    border-right: none;
  }
  .el-aside {
    width: 220px !important;
    background: #272822;
  }
  #index {
    height: 100%;
  }
}
</style>
