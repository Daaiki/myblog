<template>
  <article class="select-text">
    <div class="xl:ml-24 lg:ml-12 -ml-2 sm:mb-24 mb-16 items-end">
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
  data() {
    return {
      article: [],
    }
  },
  head() {
    return {
      // @ts-ignore
      title: this.article.title,
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        // @ts-ignore
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:url',
          property: 'og:url',
          // @ts-ignore
          content: `https://daiki.vercel.app/posts/${this.article.slug}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          // @ts-ignore
          content: `https://res.cloudinary.com/dk7rud9cp/image/upload/1_text:Noto%20Sans%20JP_35_bold:${this.article.title},co_rgb:5E5E5E,w_600,c_fit/v1613314671/OGP/OGP_dmhlrm.png`,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          // @ts-ignore
          content: `https://res.cloudinary.com/dk7rud9cp/image/upload/1_text:Noto%20Sans%20JP_35_bold:${this.article.title},co_rgb:5E5E5E,w_600,c_fit/v1613314671/OGP/OGP_dmhlrm.png`,
        },
      ],
    }
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

  @media (max-width: 640px) {
    h2 {
      border-bottom: solid 3px #eee;
      position: relative;
    }

    h2::after {
      position: absolute;
      content: '';
      display: block;
      border-bottom: solid 3px #d7e9c3;
      bottom: -3px;
      width: 20%;
    }
  }

  p {
    margin-bottom: 1.75rem;
  }

  a {
    color: #6a95fc;
  }

  a:hover {
    color: #457bfb;
  }
  // responsive
}
</style>
