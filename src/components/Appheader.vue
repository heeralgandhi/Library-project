<template>
    <div class="app-header">
        <v-row dense>
            <v-col cols="10">
                <h3>{{ title }}</h3>
            </v-col>
            <v-col cols="2" class="text-right">
                <v-btn :title="tooltip" text @click="$emit('add')">
                    <v-icon>mdi-plus-box-outline</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col color="grey lighten-4" flat height="200px" tile>
                <v-text-field placeholder="Search" append-icon="mdi-magnify" @input="$emit('search', $event)"></v-text-field>

            </v-col>
        </v-row>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-header {}
</style>