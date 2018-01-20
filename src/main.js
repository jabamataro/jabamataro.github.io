import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA1umHEsRFuD1QUs2iqd6jL2puf3Snp4pA',
      authDomain: 'room-designer-8ff86.firebaseapp.com',
      databaseURL: 'https://room-designer-8ff86.firebaseio.com',
      projectId: 'room-designer-8ff86',
      storageBucket: 'room-designer-8ff86.appspot.com',
      messagingSenderId: '977242063868'
    })
  }
})
