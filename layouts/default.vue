<template>
  <!-- sticky footer -->
  <div class="min-h-screen flex flex-col">
    <Header />
    <Container class="flex-1">
      <Main>
        <Nuxt />
      </Main>
    </Container>
    <Footer />
  </div>
</template>

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
