<template>
  <div>
    <Card
      v-for="(article, index) in articles"
      :key="index"
      :title="article.title"
      :date="article.date"
      :category="article.category"
      :tags="article.tags"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()
    return { articles }
  },
})
</script>
