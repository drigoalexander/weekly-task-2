<template>
  <div class="flex items-start justify-center">
    <div
      class="max-w-5xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 w-full"
      v-for="(el, idx) in isi"
      :key="idx"
    >
      <article class="w-full" v-if="idx === id">
        <img
          class="object-cover object-center w-full h-64"
          :src="require(`../../static/${el.gambar}`)"
          alt="Article"
        />

        <div class="p-6">
          <div>
            <span
              class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"
              >Alterra Academy</span
            >
            <a
              href="#"
              class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
              >Journey {{ id }} : {{ nama }}</a
            >
            <pre
              class="my-10 text-sm text-gray-600 dark:text-gray-400 -ml-28"
              >{{ el.isi }}</pre
            >
          </div>

          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  class="object-cover h-10 rounded-full"
                  src="https://res.cloudinary.com/dxy6iowwg/image/upload/v1630087971/drigo_jf8i3n.png"
                  alt="Avatar"
                />
                <a
                  href="#"
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  >Drigo Alexander</a
                >
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300"
                >Saturday, 23 July 2022</span
              >
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// import { createDecipheriv } from 'crypto'

export default {
  data() {
    return {
      id: null,
      nama: '',
    }
  },

  computed: {
    isi() {
      return this.$store.state.deskripsi.isi
    },
  },
  created() {
    this.id = this.$store.state.content.id
  },
}
</script>

<style></style>
