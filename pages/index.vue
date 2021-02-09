<template>
  <div>
    <Header />
    <Main>
      <Card
        v-for="(article, index) in articles"
        :key="index"
        :title="article.title"
        :description="article.description"
      />
    </Main>
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
