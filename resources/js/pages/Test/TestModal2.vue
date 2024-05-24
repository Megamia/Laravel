<template>
    <div class="root">
        <Teleport to="body">
            <div class="modal" v-if="isOpen">
                <div class="main">
                    <div class="about">
                        <div class="title">
                            <span
                                @click="show"
                                v-if="
                                    !propsData ||
                                    Object.keys(propsData).length === 0
                                "
                            >
                                Add User
                            </span>
                            <span @click="show" v-else> Update User </span>
                            <!-- <span @click="show">{{propsData}}</span> -->

                            <button
                                class="modal-default-button"
                                @click="$emit('close-modal'), (isOpen = false)"
                            >
                                X
                            </button>
                        </div>
                        <div class="infor">
                            <div class="userid">
                                <input
                                    type="text"
                                    disabled
                                    placeholder="User ID *"
                                    class="useridinput input"
                                />
                            </div>
                            <div class="name">
                                <div class="firstname">
                                    <input
                                        type="text"
                                        v-model="firstname"
                                        placeholder="First Name *"
                                        class="nameinput input"
                                        required
                                    />
                                </div>
                                <div class="lastname">
                                    <input
                                        type="text"
                                        v-model="lastname"
                                        placeholder="Last Name *"
                                        class="nameinput input"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="detail">
                                <div class="detailup">
                                    <input
                                        type="text"
                                        v-model="email"
                                        placeholder="Email ID *"
                                        class="nameinput input"
                                        required
                                    />
                                    <input
                                        type="datetime-local"
                                        v-model="createdate"
                                        class="nameinput input"
                                        required
                                    />
                                    <select
                                        class="nameinput input"
                                        v-model="selectedOption"
                                    >
                                        <option disabled value="">
                                            Please select one
                                        </option>
                                        <option value="Super Admin">
                                            Super Admin
                                        </option>
                                        <option value="HR Admin">
                                            HR Admin
                                        </option>
                                        <option value="Admin">Admin</option>
                                        <option value="Employee">
                                            Employee
                                        </option>
                                    </select>
                                </div>
                                <div class="detaildown">
                                    <input
                                        type="text"
                                        disabled
                                        placeholder="Username *"
                                        class="nameinput input"
                                    />
                                    <input
                                        type="text"
                                        disabled
                                        placeholder="Password*"
                                        class="nameinput input"
                                    />
                                    <input
                                        type="text"
                                        disabled
                                        placeholder="Confirm Password*"
                                        class="nameinput input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="permission">
                            <div class="titleper">
                                <div class="moduleper">
                                    <span>Module Permission</span>
                                </div>
                                <div class="percheck">
                                    <div class="read">
                                        <span>Read</span>
                                    </div>
                                    <div class="write">
                                        <span>Write</span>
                                    </div>
                                    <div class="delete">
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="checkbox"
                                v-for="option in options"
                                :key="option.name"
                            >
                                <label class="moduleper">{{
                                    option.name
                                }}</label>
                                <div class="percheck">
                                    <div class="read">
                                        <!-- <input type="checkbox" v-model="read" value="read" id="read" /> -->
                                        <input type="checkbox" />
                                    </div>
                                    <div class="write">
                                        <!-- <input type="checkbox" v-model="write" value="write" id="write" /> -->
                                        <input type="checkbox" />
                                    </div>
                                    <div class="delete">
                                        <!-- <input type="checkbox" v-model="del" value="delete" id="delete" /> -->
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button">
                            <div class="bothbutton">
                                <button
                                    @click="
                                        addUser();
                                        $emit('fetchData');
                                        added && $emit('close-modal');
                                    "
                                    class="buttonadd"
                                >
                                    Add User
                                </button>

                                <button
                                    @click="
                                        $emit('close-modal'),
                                            (isOpen = false),
                                            cancel
                                    "
                                    class="buttoncancel"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isOpen = ref(true);
import { useStore } from "vuex";
import axios from "axios";

const fullname = ref("");
const firstname = ref("");
const lastname = ref("");
const permission = ref("");
const email = ref("");
const createdate = ref("");
const selectedOption = ref("");
const added = ref(true);
const store = useStore();
// const users = ref(store.state.DataDashBoard.users);
const options = [
    { name: "Super Admin", permissions: ["read", "write", "delete"] },
    { name: "Admin", permissions: ["read", "write", "delete"] },
    { name: "Employee", permissions: ["read", "write", "delete"] },
    { name: "Lorem Ipsum", permissions: ["read", "write", "delete"] },
];
const data = ref([]);
const props = defineProps({
    propsData: {
        type: [Array, Object],
        required: true,
    },
});
const { propsData } = props;

const show = () => {
    // console.log(selectedOption.value);
    console.log(propsData);
};

const fetchData = () => {
    // console.log(propsData.id);
    if (propsData) {
        firstname.value = propsData.name.split(" ")[0];
        lastname.value = propsData.name.split(" ")[1];
        email.value = propsData.email;
        createdate.value = propsData.createdate;
        selectedOption.value = propsData.permission;
    } else {
        console.log("Không có data của user");
    }
};

onMounted(fetchData);

// const show = () => {
//     console.log("Show: "+);
// };

const addUser = async () => {
    if (
        !firstname.value ||
        !lastname.value ||
        !email.value ||
        !createdate.value ||
        !selectedOption.value
    ) {
        alert("Vui lòng điền đầy đủ thông tin");
        added.value = false;
        return;
    }
    const response = await axios.post(
        `${import.meta.env.VITE_APP_URL_API}/adduserDashBoard`,
        {
            name: firstname.value + " " + lastname.value,
            email: email.value,
            createdate: createdate.value,
            permission: selectedOption.value,
        }
    );
    if (response.status === 200) {
        fullname.value = response.data.data.name;
        alert("Thêm " + fullname.value + " thành công");
        added.value = true;
        // console.log(added.value);
    } else {
        alert("Có lỗi khi thêm người dùng");
        added.value = false;
    }
};
</script>
<style scoped>
.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height: 115.5%; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
}
.modal > div {
    background-color: #fff;
    /* padding: 50px; */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-inline: 200px;
    margin-block: 150px;
    /* height: 100vh; */
}
.main {
    display: flex;
    flex: 1;
    /* background-color: #9da0a9; */
    /* justify-content: center; */
    /* align-items: center; */
    /* opacity: 0.5; */

    /* justify-content: center; */
    /* align-items: center; */
}

.about {
    /* position: absolute; */
    display: flex;
    flex: 1;
    flex-direction: column;
    /* height: 700px; */
    width: 93%;
    justify-content: center;
    /* right: 50%; */
    /* align-self: center; */
    background-color: #fff;
    margin: 50px;
    font-size: 20px;
}
.title {
    display: flex;
    /* flex: 1; */
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-inline: -15px;
    font-weight: bold;
}

.input {
    padding: 20px;
}

.userid {
    display: flex;
    flex: 1;
}
.useridinput {
    display: flex;
    flex: 1;
}
.name {
    flex: 1;
    display: flex;
    flex-direction: row;
}
.nameinput {
    display: flex;
    flex: 1;
}
.firstname,
.lastname {
    display: flex;
    flex: 1;
}
.detail {
    display: flex;
    /* flex: 1; */
    flex-direction: column;
}
.detailup {
    display: flex;
    flex: 1;
    flex-direction: row;
}
.detaildown {
    display: flex;
    flex: 1;
    flex-direction: row;
}
.permission {
    margin-top: 30px;
}
.titleper {
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 20px;
    background-color: #eff4fa;
}
.moduleper {
    display: flex;
    width: 50%;
}
.percheck {
    display: flex;
    flex: 1;
    flex-direction: row;
}
.read {
    display: flex;
    width: calc(100% / 3);
    justify-self: start;
}
.write {
    display: flex;
    width: calc(100% / 3);
}
.delete {
    display: flex;
    width: calc(100% / 3);
}
.checkbox {
    display: flex;
    flex-direction: row;
    padding: 20px;
}

.button {
    display: flex;
    /* flex: 1; */
    align-items: center;
    justify-content: end;
    margin-top: 10px;
}
.bothbutton {
    display: flex;
    /* flex: 1; */
    gap: 20px;
}
.buttonadd {
    color: white;
    background-color: #0095ff;
    border-width: 0;
    border-radius: 10px;
    padding-block: 7px;
    padding-inline: 20px;
    width: 120px;
}
.buttonadduser {
    background-color: #4a85f6;
    padding-block: 10px;
    padding-inline: 20px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    color: white;
    border-width: 0;
    cursor: pointer;
    font-size: 23px;
    font-weight: 500;
}
.modal-default-button,
.buttonadd,
.buttoncancel {
    cursor: pointer;
}
.buttoncancel {
    color: #8f9bb3;
    border-width: 0;
    background-color: #fff;
    padding-block: 7px;
    padding-inline: 20px;
    width: 120px;
}
.check {
    cursor: pointer;
}
</style>
