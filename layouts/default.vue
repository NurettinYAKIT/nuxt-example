<template>
  <v-app>
    <v-card flat>
      <v-toolbar color="blue-grey darken-1">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
          <n-link to="/weather-app">{{ title }}</n-link>
        </v-toolbar-title>
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
      </v-toolbar>
    </v-card>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Learning Nuxt'
    }
  },
  methods: {
    menuItems() {
      return this.menu
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>
