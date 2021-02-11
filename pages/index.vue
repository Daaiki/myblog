<template>
  <div>
    <Title>Posts</Title>
    <Card
      v-for="(article, index) in articles"
      :key="index"
      :title="article.title"
      :date="article.date"
      :category="article.category"
      :tags="article.tags"
      :slug="'/posts/' + article.slug"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('posts').fetch()
    return { articles }
  },
})
</script>
