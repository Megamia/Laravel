<template>
    <div class="row">
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="btn btn-danger">Register User</h1>
                    <div>
                        <p>Name:</p>
                        <input
                            placeholder="Name"
                            type="text"
                            v-model="form.name"
                            @click="showname"
                        />
                    </div>
                    <div>
                        <p>Email:</p>
                        <input
                            placeholder="Email"
                            type="text"
                            v-model="form.email"
                            @click="showemail"
                        />
                    </div>
                    <div>
                        <p>Password:</p>
                        <input
                            placeholder="Password"
                            type="password"
                            v-model="form.password"
                            @click="showpass"
                        />
                    </div>
                    <!-- <div>
                        <p>Passowrd confirmation:</p>
                        <input
                            placeholder="passowrd_confirmation"
                            type="password"
                            v-model="form.passowrd_confirmation"
                        />
                    </div> -->
                </div>
                <div class="button">
                    <router-link to="/Login" class="link">Login</router-link>

                    <button @click.prevent="saveForm" type="submit">
                        Register
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
</template>
<script>
import axios from "axios";
// import qs from "qs";
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                // passowrd_confirmation: "",
            },
            error: [],
        };
    },
    methods: {
    async saveForm() {
        try {
            const response = await axios.post("/register", this.form);
            console.log("saved");
        } catch (error) {
            console.log("Error: " + error);
        }
    },
    showname() {
        alert(this.form.name);
    },
    showemail() {
        alert(this.form.email);
    },
    showpass() {
        alert(this.form.password);
    },
},

};
</script>

<style scoped>
.button {
    display: flex;
    gap: 30px;
}
</style>