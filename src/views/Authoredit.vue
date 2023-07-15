<template>
    <div>
        <v-row>
            <v-col cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3">
                <v-form>
                    <v-text-field label="Code" v-model="author._id"></v-text-field>
                    <v-text-field label="Name" v-model="author.name"></v-text-field>
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
import authorList from "@/data/authors.json"
    export default {
        data() {
            return {
                id: 0,
                author: this.defaultObject()
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init() {
                this.id = this.$route.params.id
                if(this.id != 0){
                    this.book = authorList.find(rec => rec._id==this.id)
                }
                
            },
            defaultObject(){
                return{
                    code:"",
                    name:""
                }
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>