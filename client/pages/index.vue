<template>
  <section class="container">
    <div>
      <top-bar/>
      <side-bar/>      
          </div>
  </section>
</template>

<script>
import TopBar from "~/components/TopBar.vue"
import SideBar from "~/components/SideBar.vue"

export default {
	components: {
		TopBar,
		SideBar
	}
}
</script>

<style>
</style>

