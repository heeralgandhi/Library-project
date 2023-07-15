<template>
    <div>
        <v-list-item v-for="i in issuesList" :key="i._id">
            
        <v-list-content>
            <v-list-title >{{ i.issueDate }}</v-list-title>
            <v-list-title>Book Name: {{ i.book.title }}</v-list-title>
            <v-list-subtitle>Member Name: {{ i.member.name }}</v-list-subtitle>
            <v-list-subtitle>Return Date: {{ i.returnDate }}</v-list-subtitle>
        </v-list-content>

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
                                <v-list-item-title @click="$router.push('/issued/' + i._id)">Return</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Notify</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-title>Return</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-list-item-icon>

        </v-list-item>
    </div>
</template>

<script>
import issuesList from "@/data/issues.json"
    export default {
        data() {
            return {
                id:"",
                issuesList: ""
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>