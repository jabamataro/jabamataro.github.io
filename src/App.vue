<template>
<div id="app">
   <v-app dark>
    <v-toolbar class="grey darken-1">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Carl's Builders
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
 </div>
</template>
<script>
  export default {
    data () {
      return {
        menuItems: [
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]
      }
    }
  }
 </script>