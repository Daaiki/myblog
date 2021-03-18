<template>
  <!-- sticky footer -->
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex flex-1">
      <Container>
        <Main>
          <Nuxt />
        </Main>
      </Container>
      <SideBar />
    </div>
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
  user-select: none;
}
</style>
