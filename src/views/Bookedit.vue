<template>
    <div>
        <v-row>
            <v-col cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3">
                <v-form>
                    <v-text-field label="Code" v-model="book._id"></v-text-field>
                    <v-text-field label="Title" v-model="book.title"></v-text-field>
                    <v-textarea label="Description" v-model="book.description"></v-textarea>
                </v-form>
                <div class="text-right">
                    <v-btn>Save</v-btn>
                    <v-btn>Cancel</v-btn>
                </div>
            </v-col>
        </v-row>


    </div>
</template>

<script>
import bookList from "@/data/books.json";
export default {
    data() {
        return {
            id: 0,
            book: this.defaultObject()
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.id = this.$route.params.id
            if(this.id != 0){
                //fetch from books.json
                this.book= bookList.find(rec => rec._id==this.id)

            }


        },
        defaultObject() {
            return{
                code:"",
                title: "",
                description: ""
                
            }
        }
    },

}

</script>

<style lang="scss" scoped></style>