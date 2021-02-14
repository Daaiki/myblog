<template>
  <div>
    <Title class="mb-20">Categories</Title>
    <Categories
      v-for="(category, index) in categories"
      :key="index"
      :category="category.category"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const query = $content('posts', { deep: true }).only(['category'])
    const categories = await query.fetch()
    return {
      categories,
    }
  },
})
</script>
