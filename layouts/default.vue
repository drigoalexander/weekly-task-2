<template>
  <div class="max-w-screen-2xl w-[90%] mx-auto">
    <div class="flex flex-col">
      <NavbarTop />
      <hr />
      <div class="pt-10 flex">
        <Sidebar class="w-1/3" />
        <Nuxt class="w-3/4" />
      </div>
      <Back />
    </div>
  </div>
</template>

<script>
import NavbarTop from '../components/NavbarTop.vue'
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: { NavbarTop },
}
</script>

<style></style>
