<template>
  <div>
    <Title>{{ $route.params.category }}</Title>
    <Card
      v-for="(article, index) in articles"
      :key="index"
      :title="article.title"
      :date="article.date"
      :tags="article.tags"
      :slug="'/posts/' + article.slug"
      category-hidden="hidden"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const articles = await $content('posts', { deep: true })
      .sortBy('id', 'desc')
      .where({ category: { $contains: params.category } })
      .fetch()
    return {
      articles,
    }
  },
})
</script>
