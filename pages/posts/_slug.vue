<template>
  <article>
    <h1>{{ article.title }}</h1>
    <div>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('posts', params.slug).fetch()
    return { article }
  },
})
</script>
