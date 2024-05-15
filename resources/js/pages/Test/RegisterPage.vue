<template>
    <div class="container">
        <form @submit.prevent="handleRegister" class="form" method="post">
            <h2>Đăng ký</h2>
            <div class="formRegister">
                <div class="name">
                    <label>Name:</label>
                    <input
                        type="text"
                        v-model="dataUser.name"
                        placeholder="Name"
                        required
                    />
                </div>
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
                        <RouterLink to="/Login"> Đăng nhập </RouterLink>
                    </button>
                    <button type="submit">Đăng ký</button>
                </div>
                <div class="btnHome">
                    <button>
                        <RouterLink to="/"> Home </RouterLink>
                    </button>
                </div>
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
    name: "",
    email: "",
    password: "",
});

const handleRegister = async () => {
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    // console.log("csrfToken: " + csrfToken);
    // console.log("Name send: ", dataUser.value.name);
    // console.log("Email send: ", dataUser.value.email);
    // console.log("Password send: ", dataUser.value.password);

    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/register",
            {
                name: dataUser.value.name,
                email: dataUser.value.email,
                password: dataUser.value.password,
            }
        );
        if (response.status === 200) {
            alert("Đăng ký thành công!");
            router.push("/Login");
        } else {
            alert("Đăng ký thất bại!");
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
    .action {
        .button {
            display: flex;
            flex: 1;
            justify-content: center;
            button {
                font-size: 30px;
                a {
                    text-decoration: none;
                    color: black;
                }
            }
        }
        .btnHome {
            display: flex;
            flex: 1;
            button {
                display: flex;
                flex: 1;
                justify-content: center;
                margin-top: 30px;

                font-size: 30px;
                a {
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
}

.name,
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
    gap: 30px;
    h2 {
        display: flex;
        justify-content: center;
        font-size: 40px;
    }
    .formRegister {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 30px;
    }
}
.button {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    font-size: 30px;
    button {
        font-size: 30px;
    }
}
</style>
