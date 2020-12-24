<template>
  <div id="index">
    <el-container v-if="$route.meta.keepAlive">
      <el-header>
        <keep-alive>
          <header-nav></header-nav>
        </keep-alive>
      </el-header>
      <el-container class="index-page">
        <el-aside>
          <keep-alive>
            <el-scrollbar>
              <left></left>
            </el-scrollbar>
          </keep-alive>
        </el-aside>
        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
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
  width: 100vw;
  height: 100vh;
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
  .el-menu {
    border-right: none;
  }
  .el-aside {
    width: 220px !important;
    height: calc(100vh - 60px);
    background: #272822;
  }
  .el-main {
    padding: 5px;
  }
  #index {
    height: 100vh;
  }
  .index-page {
    height: calc(100vh - 60px);
  }
}
</style>
