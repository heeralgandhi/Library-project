<template>
    <div>
        <v-row>
            <v-col cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3">
                <v-form>
                    <v-text-field label="First_Name" v-model="member.firstName"></v-text-field>
                    <v-text-field label="Middle_Name" v-model="member.middleName"></v-text-field>
                    <v-text-field label="Last_Name" v-model="member.lastName"></v-text-field>
                    <v-text-field label="Mobile_Number" v-model="member.mobileNo"></v-text-field>
                    <v-text-field type="password" label="Password" v-model="member.password"></v-text-field>
                    <v-text-field type="password" label="Confirm_Password" v-model="member.password"></v-text-field>
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
import memberList from "@/data/members.json";
export default {
    data() {
        return {
            id: 0,
            member: this.defaultObject()
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
                this.member= memberList.find(rec => rec._id==this.id)

            }


        },
        defaultObject() {
            return{
                First_Name:"",
                Middle_Name: "",
                Last_Name: "",
                Mobile_No: "",
                Password: "",
                Confirm_Password: ""
                
            }
        }
    },

}
</script>

<style lang="scss" scoped></style>