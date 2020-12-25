<template>
  <el-menu
    default-active="Calendar"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    background-color="#272822"
    active-background-color="#414339"
    text-color="#fff"
    active-text-color="#ffd04b"
    mode="vertical"
    unique-opened="true"
    router="true"
    :collapse="isCollapse"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>Element Plus</span>
      </template>
      <el-menu-item index="Calendar">日历</el-menu-item>
      <el-menu-item index="Timeline">时间条</el-menu-item>
      <!-- <el-submenu index="1-1">
        <template #title>选项4</template>
        <el-menu-item index="1-1-1">选项1</el-menu-item>
      </el-submenu> -->
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>vue插件</span>
      </template>
      <el-menu-item index="About">markdown插件marked</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-document"></i>
      <template #title>导航三</template>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleSelect(index: any, indexPath: any) {
      // this.$router.push({ name: index });
    },
    handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
    handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  }
})
export default class Left extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss"></style>
