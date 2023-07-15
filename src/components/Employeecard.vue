<template>
    <div>
        <v-list-item v-for="item in employee" :key="item.id">
            <v-list-item-avatar>
                <v-img :alt="`${item.img} avatar`" :src="item.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ item.firstName + " " + item.middleName + " " + item.lastName }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.mobileNo }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        
    </div>
</template>

<script>
import employeeList from "@/data/employees.json"
    export default {
        data() {
            return {
                id: 0,
                employee: employeeList
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>