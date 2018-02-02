<template>

        <v-content>
      <section>
        <v-parallax :src="require('@/assets/bg.jpg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
            >
            <!-- <img src="assets/vuetify.png" alt="Vuetify.js" height="200"> -->
            <br><br><br>         
            <h1 class="white--text mb-2 display-1 text-xs-center">CARL'S BUILDERS</h1>
            <h1 class="white--text mb-2 display-1 text-xs-center">SIGN UP</h1>
            <div class="subheading mb-3 text-xs-center"></div>
            
<v-card color="secondary" flat>
    <v-card-text>
      <v-container fluid grid-list-md>
        <v-layout row>   
          <v-flex xs10>
            <v-text-field
              name="input-1-3"
              label="First Name"
              single-line
              dark
              prepend-icon="account_circle"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>   
          <v-flex xs10>
            <v-text-field
              name="input-1-3"
              label="Second Name"
              single-line
              dark
              prepend-icon="account_circle"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>   
          <v-flex xs10>
            <v-text-field
              name="input-1-3"
              label="Username"
              single-line
              dark
              prepend-icon="account_circle"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>   
          <v-flex xs10>
            <v-text-field
              name="input-1-3"
              label="Password"
              single-line
              dark
              prepend-icon="security"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>   
          <v-flex xs10>
            <v-text-field
              name="input-1-3"
              label="Email"
              single-line
              dark
              prepend-icon="email"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-btn block color="success" dark>
        
        REGISTER
        
        <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
        
        
      </v-container>

      
    </v-card-text>
</v-card>

          </v-layout>
    <br><br><br><br><br><br>
        </v-parallax>

        
      </section>

     
    

     

     
    </v-content>
</template>

<script>
document.title = 'Sign Up'
export default {
}
</script>
