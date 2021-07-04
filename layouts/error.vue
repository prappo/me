<template>
  <div class="flex justify-center items-center h-screen flex-col gap-2">
    <h1 class=" text-4xl" v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    
    <NuxtLink to="/">Go to Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>