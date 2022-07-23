<template>
  <div class="mx-auto">
    <ul
      class="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box h-[38rem] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-600"
    >
      <li
        v-for="(el, idx) in getContent"
        :key="idx"
        class="hover-bordered"
        @click="red(idx, el.name)"
      >
        <a>{{ el.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    getContent() {
      return this.$store.state.content.content
    },
  },
  methods: {
    red(idx, nama) {
      this.$router.push({
        name: 'id-name',
        params: {
          id: idx,
          name: nama,
        },
      })

      this.$store.dispatch('content/fetchID', {
        id: idx,
      })
    },
  },
}
</script>

<style></style>
