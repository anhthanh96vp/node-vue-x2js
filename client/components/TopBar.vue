<template>

<div class="top_bar">
<div class="line"></div>
    
<el-menu

  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">

  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">Workspace</template>
    <el-menu-item index="3-1">item one</el-menu-item>
    <el-menu-item index="3-2">item two</el-menu-item>
    <el-menu-item index="3-3">item three</el-menu-item>
    <el-submenu index="3-4">
      <template slot="title">item four</template>
      <el-menu-item index="3-4-1">item one</el-menu-item>
      <el-menu-item index="3-4-2">item two</el-menu-item>
      <el-menu-item index="3-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="4"><nuxt-link to="/auth/register">Register</nuxt-link></el-menu-item>
  <el-menu-item index="5"><nuxt-link to="/auth/login">Login</nuxt-link></el-menu-item>
</el-menu>
</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: "1",
			activeIndex2: "1"
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath)
		}
	}
}
</script>
<style scoped>
</style>
