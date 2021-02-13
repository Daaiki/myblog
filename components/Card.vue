<template>
  <article class="sm:pl-10 mb-10 w-11/12 sm:w-10/12 lg:w-6/12">
    <nuxt-link :to="slug">
      <h2
        class="mt-16 sm:text-2xl text-xl text-pale-gray font-bold py-4 border-b border-pale-green"
      >
        {{ title }}
      </h2>
    </nuxt-link>
    <ul class="py-2 sm:text-sm text-xs xs:flex block items-center">
      <li class="sm:mr-5 mr-2 xs:mb-0 mb-1">
        <time>{{ date }}</time>
      </li>
      <li class="sm:mr-5 mr-2 xs:mb-0 mb-1">{{ category }}</li>
      <li>{{ tags }}</li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    tags: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
  },
})
</script>
