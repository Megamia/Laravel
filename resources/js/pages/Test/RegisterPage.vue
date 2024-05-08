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
                            v-model="dataUser.name"
                        />
                    </div>
                    <div>
                        <p>Email:</p>
                        <input
                            type="email"
                            v-model="dataUser.email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <p>Password:</p>
                        <input
                            placeholder="Password"
                            type="password"
                            v-model="dataUser.password"
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

                    <button @click.prevent="handleRegister" type="submit">
                        Register
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";

const dataUser = ref({
    name: "",
    email: "",
    password: "",
});

const handleRegister = async () => {
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    // console.log("csrfToken: " + csrfToken);
    console.log("Name send: ", dataUser.value.name);
    console.log("Email send: ", dataUser.value.email);
    console.log("Password send: ", dataUser.value.password);

    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/register",
            {
                name: dataUser.value.name,
                email: dataUser.value.email,
                password: dataUser.value.password,
            }
        );
        // if (response.status === 200) {
        //     alert("Đăng nhập thành công!");
        //     router.push('/Dashboard' );
        // } else {
        //     alert("Đăng nhập thất bại!");
        // }

        // {
        //     headers: {
        //         "X-CSRF-TOKEN": csrfToken,
        //     },
        // }

        console.log("Response: ", response.data);
    } catch (error) {
        console.error("Error:", error);
    }
};
</script>

<style scoped>
.button {
    display: flex;
    gap: 30px;
}
</style>
