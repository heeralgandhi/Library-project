<template>
    <div>
        <Appheader title="Members" tooltip="Add Members" @add="$router.push('/members/0')" @search="searchInMembers($event)"></Appheader>
        <v-list-item v-for="(item, i) in members" :key="i">
          <v-list-item-avatar>
              <v-img :alt="`${item.img} avatar`" :src="item.img"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
              <v-list-item-title>{{ item.firstName +" " + item.middleName + " "+ item.lastName }}</v-list-item-title>
              <v-list-item-subtitle>Phone No: {{ item.mobileNo}}</v-list-item-subtitle>
              
          </v-list-item-content>
        </v-list-item>

    </div>
</template>

<script>
import memberList from "@/data/members.json";
import Appheader from "@/components/Appheader.vue"
export default {
    components: {
        Appheader,
    },
    data() {
        return {
            members: memberList,
        };
    },
    methods: {
          searchInMembers(searchtext) {
              if (searchtext) {
                  this.authors = authorsList.filter(rec => rec.title.toLowerCase().includes(searchtext.toLowerCase()))
              }
        }
    }
}
</script>

<style lang="scss" scoped></style>