<template>
  <v-app>
    <v-app-bar app color="">
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/logo.png" transition="scale-transition"
          width="40" />
        {{ $const.APP_NAME }}

      </div>

      <v-spacer></v-spacer>

      <v-btn text @click="$router.push('/books')">Books</v-btn>
      <v-btn text @click="$router.push('/authors')">Authors</v-btn>
      <v-btn text @click="$router.push('/members')">Members</v-btn>
      <v-btn text @click="$router.push('/employees')">Employees</v-btn>

      <v-btn text @click="$router.push('/')">
        <span class="mr-2">LOGIN</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('@/assets/styles.css');
</style>
