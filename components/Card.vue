<template>
  <article class="pl-10 mb-10">
    <h2 class="text-2xl text-green-400 font-bold">{{ title }}</h2>
    <p class="text-gray-650 py-4 pl-3">{{ description }}</p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
  }
})
</script>
