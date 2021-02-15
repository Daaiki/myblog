<template>
  <article>
    <div class="xl:ml-24 lg:ml-12 -ml-4 sm:mb-24 mb-16 items-end">
      <h1
        class="font-bold my-2 py-1 mr-4 pl-4 border-l-8 border-pale-pink md:text-3xl text-2xl"
      >
        {{ article.title }}
      </h1>
      <div class="flex ml-8 items-center">
        <time class="mr-5">{{ article.date }}</time>
        <p class="flex items-center">
          <unicon
            class="inline-block pr-1"
            name="folder"
            fill="#5e5e5e"
            width="17"
            height="17"
          /><nuxt-link :to="'/categories/' + article.category">{{
            article.category
          }}</nuxt-link>
        </p>
      </div>
    </div>
    <div
      class="xl:ml-40 lg:ml-24 xl:w-12/6 lg:w-7/12 md:w-10/12 sm:11/12 w-12/12"
    >
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

<style lang="scss">
.nuxt-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  strong,
  code,
  em {
    font-family: -apple-system-body, BlinkMacSystemFont, Helvetica Neue,
      Helvetica Sans, Hiragino Kaku Gothic ProN, '游ゴシック  Medium',
      'Yu Gothic Medium', 'メイリオ', meiryo, sans-serif;
    color: #444;
    line-height: 1.8;
    letter-spacing: 0.05rem;
  }

  h2 {
    position: relative;
    padding: 0.25em 0;
    font-weight: bold;
    font-size: 1.7rem;
    margin: 48px 0 24px 0;
  }
  h2::after {
    content: '';
    display: block;
    height: 3.8px;
    background: linear-gradient(to right, #d7e9c3, transparent);
  }

  p {
    margin-bottom: 1.75rem;
  }
  // responsive
}
</style>
