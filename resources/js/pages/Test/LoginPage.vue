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
                        required
                    />
                </div>
                <div class="password">
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        v-model="dataUser.password"
                        placeholder="Mật khẩu"
                        required
                    />
                </div>
            </div>
            <div class="action">
                <div class="button">
                    <button>
                        <RouterLink to="/Register"> Đăng ký </RouterLink>
                    </button>
                    <button type="submit">Đăng nhập</button>
                </div>
                <div class="btnHome">
                    <button>
                        <RouterLink to="/"> Home </RouterLink>
                    </button>
                </div>
            </div>
        </form>
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
   // http://127.0.0.1:8000/
   // ${process.env.APP_URL}
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/login`, {
            email: dataUser.value.email,
            password: dataUser.value.password,
        });
        if (response.status === 200) {
            alert("Đăng nhập thành công!");
            router.push("/Dashboard");
        } else {
            alert("Đăng nhập thất bại!");
        }
        // console.log("Response: ", response.data);
    } catch (error) {
        console.error("Error:", error);
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    .action {
        .button {
            display: flex;
            flex: 1;
            justify-content: center;
            margin-top: 30px;

            button {
                font-size: 30px;
                cursor: pointer;

                a {
                    text-decoration: none;
                    color: black;
                }
            }
        }
        .btnHome {
            display: flex;
            flex: 1;
            margin-top: 30px;
            cursor: pointer;
            button {
                display: flex;
                flex: 1;
                justify-content: center;
                font-size: 30px;
                align-items: center;
                a {
                    text-decoration: none;
                    color: black;
                    display: flex;
                    flex: 1;
                    justify-content: center;
                }
            }
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
