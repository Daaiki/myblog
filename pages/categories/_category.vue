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
  data() {
    return {
      article: [],
    }
  },
  head() {
    return {
      // @ts-ignore
      title: `${this.articles[0].category}の記事一覧`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          // @ts-ignore
          content: `${this.articles[0].category}の記事一覧`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          // @ts-ignore
          content: `https://daiki.vercel.app/posts/categories/${this.articles[0].category}`,
        },
      ],
    }
  },
})
</script>
