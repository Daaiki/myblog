<template>
  <nav
    class="h-screen fixed top-0 right-0 bg-pale-green text-pale-gray z-0 xs:w-48 w-full"
  >
    <ul class="pt-48 pb-24 pl-12">
      <li class="mb-10 hover:text-hover-gray"><nuxt-link to="/">Posts</nuxt-link></li>
      <li class="mb-10 hover:text-hover-gray"><nuxt-link to="categories">Categories</nuxt-link></li>
      <li class="mb-10 hover:text-hover-gray"><nuxt-link to="about">About</nuxt-link></li>
    </ul>
    <SnsIcons width="20" height="20" classes="cursor-pointer pr-3" />
  </nav>
</template>
