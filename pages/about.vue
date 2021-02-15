<template>
  <div>
    <Title> About Me </Title>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Meta from '~/assets/mixins/meta'

export default Vue.extend({
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'About',
        description: '@daiki’s blogのAboutページです',
        type: 'article',
        url: 'https://daiki.vercel.app/about',
        image: '',
      },
    }
  },
})
</script>
