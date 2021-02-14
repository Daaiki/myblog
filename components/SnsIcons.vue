<template>
  <ul
    class="flex h-16 md:h-24 md:w-48 border-b-2 border-pale-green items-center justify-center pl-5"
  >
    <li v-for="(item, index) in items" :key="index" :class="classes">
      <a :href="item.url">
        <unicon
          :fill="fill"
          :width="width"
          :height="height"
          :name="item.name"
        />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    width: {
      type: String,
      default: '30',
    },
    height: {
      type: String,
      default: '30',
    },
    classes: {
      type: String,
      default: 'cursor-pointer',
    },
  },
  data() {
    return {
      fill: '#969383',
      items: [
        {
          name: 'twitter-alt',
          url: 'https://twitter.com/daik__s',
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/daaiki625',
        },
        {
          name: 'github-alt',
          url: 'https://github.com/Daaiki',
        },
      ],
    }
  },
})
</script>
