<template>
  <div class="flex items-center ml-5 mb-12">
    <unicon
      class="inline-block pr-1"
      name="folder"
      fill="#f2d8b3"
      width="45"
      height="45"
    />
    <nuxt-link :to="'/categories/' + category">
      <h2 class="pl-2 font-bold text-4xl text-pale-gray">{{ category }}</h2>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    category: {
      type: String,
      default: '',
    },
  },
})
</script>
