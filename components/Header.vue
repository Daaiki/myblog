<template>
  <header class="flex justify-between items-center z-50">
    <nuxt-link to="/">
      <h1
        class="hover:text-hover-gray font-bold text-pale-gray tracking-wide text-2xl md:text-3xl lg:pl-16 md:pl-10 sm:pl-6 pl-3 h-8"
      >
        &#64;daiki&rsquo;s blog
      </h1>
    </nuxt-link>
    <div class="flex fixed right-0 top-0">
      <SnsIcons
        class="pt-1 bg-pale-white sm:flex hidden"
        width="30"
        height="30"
        classes="cursor-pointer mr-5"
      />
      <div
        class="bg-pale-green h-16 w-16 md:h-24 md:w-24 flex justify-center items-center"
      >
        <unicon
          class="cursor-pointer"
          :fill="fill"
          :width="width"
          :height="height"
          :name="isActive ? 'bars' : 'times'"
          @click="onClick"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      fill: '#969383',
      height: '45',
      width: '45',
      name: 'bars',
      isActive: true,
    }
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive
      this.$emit('hamburgerClick')
    },
  },
})
</script>
