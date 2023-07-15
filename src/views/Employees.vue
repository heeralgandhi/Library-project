<template>
    <div>
        <Appheader title="Employees" tooltip ="Add Employees" @add="$router.push('employees/0')" @search="searchInEmployees($event)"></Appheader>
        <Employeecard></Employeecard>
    </div>
</template>

<script>
import Appheader from "@/components/Appheader.vue"
import Employeecard from "@/components/Employeecard.vue"

    export default {
        components: {
            Appheader,
            Employeecard
        },
       data() {
        return {
            key: value
        }
       }, 
       methods: {
        searchInEmployees() {
            
        }
       },
        
    }
</script>

<style lang="scss" scoped>

</style>