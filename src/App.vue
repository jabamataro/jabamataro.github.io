<template>
<div id="app">
   <v-app>
    <v-toolbar :manual-scroll="visible" dense fixed flat >
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
        visible: true,
        menuItems: [
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]
      }
    },
    methods: {
      onScroll (event) {
        if (window.pageYOffset === 0) {
          this.visible = true
        } else if (window.pageYOffset > 100) {
          this.visible = false
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.onScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.onScroll)
    }
  }
 </script>