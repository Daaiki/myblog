<template>
  <div>
    <unicon
      :name="isHidden ? 'bars' : 'times'"
      fill="#969383"
      width="45"
      height="45"
      class="z-20 fixed right-0 top-0 mr-2 mt-2 md:mr-6 md:mt-6 cursor-pointer"
    />
    <nav
      class="h-screen fixed top-0 right-0 bg-pale-green text-pale-gray z-0 w-48"
      :class="{ hidden: isHidden }"
    >
      <ul class="pt-48 pb-24 pl-12">
        <li class="mb-10 hover:text-hover-gray">
          <nuxt-link to="/">Posts</nuxt-link>
        </li>
        <li class="mb-10 hover:text-hover-gray">
          <nuxt-link to="../categories">Categories</nuxt-link>
        </li>
        <li class="mb-10 hover:text-hover-gray">
          <nuxt-link to="../about">About</nuxt-link>
        </li>
      </ul>
      <SnsIcons width="20" height="20" classes="cursor-pointer pr-3" />
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isHidden: true,
    }
  },
  mounted() {
    window.addEventListener('click', this.makeBreak)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.makeBreak)
  },
  methods: {
    // @ts-ignore
    makeBreak(event) {
      if (!this.$el.contains(event.target)) {
        this.isHidden = true
      } else {
        this.isHidden = !this.isHidden
      }
    },
  },
})
</script>
