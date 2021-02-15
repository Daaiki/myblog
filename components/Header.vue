<template>
  <header class="bg-pale-white pb-3 flex justify-between items-center z-50">
    <nuxt-link to="/">
      <h1
        class="hover:text-hover-gray font-bold text-pale-gray tracking-wide text-xl sm:text-2xl md:text-3xl lg:pl-16 md:pl-10 sm:pl-6 pl-3 sm:my-6"
      >
        &#64;daiki&rsquo;s blog
      </h1>
    </nuxt-link>
    <div class="flex fixed right-0 top-0">
      <SnsIcons
        class="pt-1 bg-pale-white"
        width="30"
        height="30"
        classes="cursor-pointer mr-5"
      />
      <div
        class="bg-pale-green h-16 w-16 md:h-24 md:w-24 flex justify-center items-center"
      >
        <tasty-burger-button
          :type="buttonType"
          :size="size"
          :color="color"
          :active-color="activeColor"
          @toggle="onClick"
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
      buttonType: 'collapse',
      size: 'm',
      color: '#969383',
      activeColor: '#5e5e5e',
    }
  },
  methods: {
    onClick() {
      this.$emit('hamburgerClick')
    },
    responsiveIcon() {},
  },
})
</script>
