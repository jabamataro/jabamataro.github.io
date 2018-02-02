<template >
  <v-app>
    <v-navigation-drawer fixed app v-model="drawer">
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="green darken-1" dark app fixed>
      <v-toolbar-title class="ml-0 pl-3">
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer" v-if="this.userIsAuthenticated">
          <v-btn class="mt-0" flat icon>
              <v-icon>{{ drawer ? sideIcon.icon : sideIcon['icon-alt'] }}</v-icon>
            </v-btn>
        </v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <span class="hidden-xs-only">Carl's Builder</span>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout justify-center align-center> 
          <main>
            <router-view>

            </router-view>
          </main>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="green darken-1" app>
      <span class="white--text">&copy; 2018 Carl's Builder</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      sideIcon: { icon: 'chevron_left', 'icon-alt': 'chevron_right' }
    }
  },
  computed: {
    items () {
      let items = []
      if (this.userIsAuthenticated) {
        items = [
          { icon: 'dashboard', title: 'Dashboard' },
          { icon: 'account_circle', title: 'Account' },
          { icon: 'border_all', title: 'Floor Plans' },
          { icon: 'weekend', title: 'Furnitures' },
          { icon: 'track_changes', title: 'Charts' },
          { icon: 'group', title: 'Manage Users' },
          { icon: 'input', title: 'Logout' }
        ]
      }
      return items
    },
    // sideIcon () {
    //   let sideIcon
    //   if (this.userIsAuthenticated) {
    //     sideIcon = { icon: 'chevron_right', 'icon-alt': 'chevron_left' }
    //   }
    //   return sideIcon
    // },
    userIsAuthenticated () {
      return false
    }
  },
  name: 'App'
}
</script>
