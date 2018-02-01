<template >
  <v-app>
    <v-navigation-drawer
    dark
    app
    permanent
    :mini-variant.sync="mini">
      <v-list>
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
    <v-toolbar 
    color="green darken-1"
    dark
    fixed
    app>
      <v-toolbar-side-icon @click.native.stop="mini = !mini">
            <v-btn class="mt-0" flat icon>
              <v-icon>{{ mini ? sideIcon.icon : sideIcon['icon-alt'] }}</v-icon>
            </v-btn>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        Carl's Builders
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-flex class="mt-2">
            <v-btn flat icon>
              <v-icon>notifications</v-icon>
            </v-btn>
          </v-flex>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      mini: true,
      sideIcon: { icon: 'chevron_right', 'icon-alt': 'chevron_left' },
      items: [
        { icon: 'dashboard', title: 'Dashboard' },
        { icon: 'account_circle', title: 'Account' },
        { icon: 'border_all', title: 'Floor Plans' },
        { icon: 'weekend', title: 'Furnitures' },
        { icon: 'track_changes', title: 'Charts' },
        { icon: 'group', title: 'Manage Users' },
        { icon: 'input', title: 'Logout' }

      ]
    }
  },
  name: 'App'
}
</script>
