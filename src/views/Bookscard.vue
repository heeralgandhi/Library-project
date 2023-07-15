<template>
    <div>
        <v-list-item v-for="(item, i) in books" :key="i">
          <v-list-item-avatar>
              <v-img :alt="`${item.img} avatar`" :src="item.img"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-title>Author:{{ item.author.name }}</v-list-item-title>
              <v-list-item-subtitle>Pages:{{ item.pages }}</v-list-item-subtitle>
          </v-list-item-content>
  
          <!-- Three-dots menu -->
          <v-list-item-icon>
              <v-list-item-icon>
                  <div>
                      <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                              <v-btn color="white" plain v-bind="attrs" v-on="on">
                                  <v-icon color="black">mdi-dots-vertical</v-icon>
                              </v-btn>
                          </template>
  
                          <v-list>
  
                              <!-- Editing A book -->
                              <!-- Here, on clicking edit, we navigate to bookEdit page with given item id as param -->
  
                              <v-list-item>
                                  <v-list-item-title @click="$router.push('/books/' + item._id)">Edit</v-list-item-title>
                              </v-list-item>
  
                              <v-list-item>
                                  <v-list-item-title>Return</v-list-item-title>
                              </v-list-item>
  
                              <v-list-item>
                                  <v-list-item-title>Delete</v-list-item-title>
                              </v-list-item>
  
                              <v-list-item>
                                  <v-list-item-title>Issue</v-list-item-title>
                              </v-list-item>
                          </v-list>
                      </v-menu>
                      <br />
                      Status
                  </div>
              </v-list-item-icon>
          </v-list-item-icon>
      </v-list-item>

    </div>
</template>

<script>
import booksList from "@/data/books.json";
    export default {
        components: {
            booksList,
        },
        data() {
            return {
                books: booksList
            }
        },
        
        
    }
</script>

<style lang="scss" scoped>

</style>