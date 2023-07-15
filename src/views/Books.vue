<template>
  <div>
      
  
      <!-- render json file as a list
      <v-list dense>
        <v-list-item v-for="(item, i) in books" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
  
      <!-- AppHeader rendering (add object and searchbar)-->
  
      <!-- it catches add and search events that are happening in the child. When add event happens in child (add button is clicked), router navigates to link with id=0 i.e it goes to bookEdit page with id=0 i.e. in add mode 
      If search is catched, then $event (things written in search box) are passed to the function -->
      <app-header title="Books" tooltip="Add Book" @add="$router.push('/books/0')" @search="searchInBooks($event)"></app-header>
  
      <!-- rendering booklist -->
      <Bookscard></Bookscard>
  
     
  </div>
  </template>
  
  <script>
  import booksList from "@/data/books.json";
  import AppHeader from '@/components/Appheader.vue';
  import Bookscard from '@/views/Bookscard.vue'
  
  export default {
      components: { AppHeader,Bookscard },
      data() {
          return {
              books: booksList, //initializing a variable called books to bookList which is the imported books from the json file
  
          };
      },
  
      methods: {
          searchInBooks(searchtext) {
              if (searchtext) {
                  this.books = booksList.filter(rec => rec.title.toLowerCase().includes(searchtext.toLowerCase()))
              }
  
              // we append 'books' using the search logic to render only matching titles
              // We use filter method it's param is the records (rec) in json file that are converted to lower case. Then includes method is used whose param is searchtext in lowercase
          }
  
      }
  };
  </script>
  
  <style lang="scss" scoped></style>