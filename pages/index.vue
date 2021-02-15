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
import Meta from '~/assets/mixins/meta'

export default Vue.extend({
  mixins: [Meta],
  async asyncData({ $content }) {
    const articles = await $content('posts', { deep: true })
      .sortBy('id', 'desc')
      .fetch()
    return { articles }
  },
  head(): object {
    return {
      titleTemplate: null,
      title: '@daiki’s blog',
    }
  },
})
</script>
