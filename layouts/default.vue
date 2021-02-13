<template>
  <!-- sticky footer -->
  <div class="min-h-screen flex flex-col">
    <Header @hamburgerClick="hiddenSidebar" />
    <div class="flex flex-1">
      <Container>
        <Main>
          <Nuxt />
        </Main>
      </Container>
      <SideBar :class="{ hidden: isHidden }" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isHidden: true,
    }
  },
  methods: {
    hiddenSidebar() {
      this.isHidden = !this.isHidden
    },
  },
})
</script>

<style>
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  background-color: #fafafa;
  color: #5e5e5e;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
