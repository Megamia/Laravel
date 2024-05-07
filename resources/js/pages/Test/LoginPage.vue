<template>
    <div class="container">
        <form @submit.prevent="handleLogin" class="form">
        @csrf
            <h2>Đăng nhập</h2>
            <div class="formLogin">
                <div class="username">
                    <label>Tên đăng nhập:</label>
                    <input
                        type="text"
                        v-model="email"
                        placeholder="Tên đăng nhập"
                    />
                </div>
                <div class="password">
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        v-model="password"
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

<script>
import axios from "axios";
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        handleLogin() {
            try {
                const response = axios.post("http://127.0.0.1:8000/api/login", {
                    email: this.email,
                    password: this.password,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
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