<template>
  <div>
    <Title class="mb-20">Categories</Title>
    <Categories
      v-for="(category, index) in distinctCategories"
      :key="index"
      :category="category"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    // eliminate duplicate categories.
    // make an array of the fetched categories and use the Set().
    const allCategories = await $content('posts', { deep: true })
      .only(['category'])
      .fetch()
    const allCategoriesIntoArray = []
    for (let i = 0; i < allCategories.length; i++) {
      const categoryObj = allCategories[i]
      const oneCategory = categoryObj.category
      allCategoriesIntoArray.push(oneCategory)
    }
    const distinctCategories = [...new Set(allCategoriesIntoArray)]
    return {
      distinctCategories,
    }
  },
})
</script>
