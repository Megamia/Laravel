<template>
    <div class="container">
        <form @submit.prevent="handleLogin" class="form" method="post">
            <h2>Đăng nhập</h2>
            <div class="formLogin">
                <div class="username">
                    <label>Email:</label>
                    <input
                        type="email"
                        v-model="dataUser.email"
                        placeholder="Email"
                    />
                </div>
                <div class="password">
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        v-model="dataUser.password"
                        placeholder="Mật khẩu"
                    />
                </div>
            </div>
            <div class="submit">
                <button>Đăng nhập</button>
            </div>
        </form>
        <!-- <div class="user">
            <p>Tên đăng nhập</p>
            <input
                type="text"
                placeholder="Tên đăng nhập"
                v-model="form.email"
            />
        </div>
        <div class="password">
            <p>Mật khẩu</p>
            <input
                type="password"
                placeholder="Mật khẩu"
                v-model="form.password"
            />
        </div>
        <div class="button">
            <button @click="login" type="submit">Login</button>
            <router-link to="/Register">Register</router-link>
        </div> -->
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const dataUser = ref({
    email: "",
    password: "",
});

const handleLogin = async () => {
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    // console.log("csrfToken: " + csrfToken);
    // console.log("Email send: ", dataUser.value.email);
    // console.log("Password send: ", dataUser.value.password);
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
            email: dataUser.value.email,
            password: dataUser.value.password,
        });
        if (response.status === 200) {
            alert("Đăng nhập thành công!");
            router.push("/Dashboard");
        } else {
            alert("Đăng nhập thất bại!");
        }

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
.container {
    display: flex;
    justify-content: center;
    .submit {
        display: flex;
        flex: 1;
        justify-content: center;
        margin-top: 30px;
        button {
            font-size: 30px;
        }
    }
}

.username,
.password {
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 20px;
    label {
        display: flex;
        flex: 1;
    }
}
.form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
        display: flex;
        justify-content: center;
        font-size: 40px;
    }
    .formLogin {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 30px;
    }
}
.button {
    display: flex;
    gap: 30px;
}
</style>
