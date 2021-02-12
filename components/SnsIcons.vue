<template>
  <ul
    class="flex h-24 w-48 border-b-2 border-pale-green justify-center items-center"
  >
    <li v-for="(item, index) in items" :key="index" :class="item.class">
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
  data() {
    return {
      fill: '#969383',
      width: '30',
      height: '30',
      items: [
        {
          name: 'twitter-alt',
          url: 'https://twitter.com/daik__s',
          class: 'cursor-pointer',
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/daaiki625',
          class: 'px-6 cursor-pointer',
        },
        {
          name: 'github-alt',
          url: 'https://github.com/Daaiki',
          class: 'cursor-pointer',
        },
      ],
    }
  },
})
</script>
