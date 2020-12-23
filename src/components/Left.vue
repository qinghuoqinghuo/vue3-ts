<template>
  <el-menu
    default-active="Home"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    background-color="#272822"
    active-background-color="#414339"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-submenu index="">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="Home">Home</el-menu-item>
        <el-menu-item index="About">About</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="">
        <template #title>选项4</template>
        <el-menu-item index="">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
    <el-menu-item index="">
      <i class="el-icon-document"></i>
      <template #title>导航三</template>
    </el-menu-item>
    <el-menu-item index="">
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
      this.$router.push({ name: index });
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
