<template>
  <!-- <v-app> -->
  <div>
    <v-card flat height="80px">
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-btn text>
          <n-link to="/">HOME</n-link>
        </v-btn>
        <v-btn text>
          <n-link to="/inspire">INSPIRE</n-link>
        </v-btn>
        <v-btn text>
          <n-link to="/about">ABOUT</n-link>
        </v-btn>
        <v-btn text>
          <n-link to="/blogs">BLOG</n-link>
        </v-btn>
      </v-toolbar>
    </v-card>
    <nuxt />
  </div>
  <!-- </v-app> -->
</template>

<script>
export default {
  el: '#app',

  data() {
    return {
      title: 'Learning Nuxt',
      menu: [
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
    }
  },
  methods: {
    menuItems() {
      return this.menu
    }
  }
}
</script>

<style></style>
