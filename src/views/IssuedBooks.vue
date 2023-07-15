<template>
    <div>
        <Appheader title="Issues" tooltip="Issue book" @add="$route.push('issued/0')" @search="emit
        searchInIssued($event)"></Appheader>
        <IssuedCard></IssuedCard>
    </div>
</template>

<script>
import Appheader from "@/components/Appheader.vue"
import IssuedCard from "@/components/IssuedCard.vue"
    export default {
        components: {
            Appheader,
            IssuedCard
        },
        methods: {
            searchInIssued() {
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>