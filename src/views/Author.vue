<template>
    <div>
        <Appheader title="Author" tooltip="Add Author" @add="$router.push('/authors/0')" @search="searchInAuthors($event)"></Appheader>
        <v-list shaped>
            <v-list-item v-for="author in authors" :key="author.id">
                <v-list-item-content>
                    <v-list-item-title v-text="author.name"></v-list-item-title>
                </v-list-item-content>
            

            <v-list-item-icon>
                <div>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="white" plain v-bind="attrs" v-on="on">
                                <v-icon color="black">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title @click="$router.push('/authors/' + item._id)">Edit</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Delete</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-list-item-icon>
        </v-list-item>
        </v-list>

    </div>
</template>

<script>
import authorList from "@/data/authors.json";
import Appheader from "@/components/Appheader.vue"
export default {
    components: {
        Appheader,
    },
    data() {
        return {
            authors: authorList,
        };
    },
    methods: {
          searchInAuthors(searchtext) {
              if (searchtext) {
                  this.auhtors = authorsList.filter(rec => rec.title.toLowerCase().includes(searchtext.toLowerCase()))
              }
        }
    }
}
</script>

<style lang="scss" scoped></style>