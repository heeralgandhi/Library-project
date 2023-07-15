<template>
  <div class="center">
    <v-row>
      <v-col cols="4" offset="4">
        <v-avatar color="primary" size="200">
          <v-img src="@/assets/logo.png"></v-img>
        </v-avatar>
        <h2>Welcome to Librarian</h2>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field type="password" label="Password" v-model="password"></v-text-field>
        <v-btn @click="authenticate" class="base-inverted" block>Login</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        authenticate() {
            alert("Login success");
        }
    }
};
</script>

<style lang="scss" scoped></style>