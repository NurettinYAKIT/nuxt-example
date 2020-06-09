<template>
  <div>
    <h1>{{title}}</h1>
    <n-link to="/">Home</n-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      title: 'About'
    }
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About Page Description'
        }
      ],
      script: [{ src: '/about.js' }]
    }
  }
}
</script>

<style>
</style>