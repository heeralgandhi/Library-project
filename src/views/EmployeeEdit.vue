<template>
    <div>
        <v-row>
            <v-col cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3">
                <v-form>
                    <v-text-field label="FirstName" v-model="employee.firstName"></v-text-field >
                    <v-text-field  label="MiddleName" v-model="employee.middleName"></v-text-field >
                    <v-text-field  label="LastName" v-model="employee.lastname"></v-text-field >
                    <v-select label="Role" v-model="employee.role" :items="role" outlined></v-select>
                    <v-text-field  label="Password" v-model="employee.password"></v-text-field >
                    <v-text-field  label="Confirm Password" v-model="employee.password"></v-text-field >
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
import employeeList from "@/data/employees.json"
export default {
    data() {
        return {
            id: 0,
            employee: this.defaultObject(),
            role: ['Manager', 'Book Keeper']

        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.id = this.$route.params.id;
            if (this.id != 0) {
                this.employee = employeeList.find(rec => rec._id == this.id)
            }

        },
        defaultObject() {
            return {
                FirstName: "",
                LastName: "",
                MiddleName: "",
                Password: "",
                ConfirmPassword: "",
                Role: ""


            }
        }
    },

}
</script>

<style lang="scss" scoped></style>