<template>
  <div class="root">
    <!-- <button @click="isOpen = true" class="buttonadduser">Add user +</button> -->
    <template v-for="user in users" :key="user.Name">
      <Teleport to="body">
        <div class="modal" v-if="isOpen">
          <div class="main">
            <div class="about">
              <div class="title">
                <span v-if="emailselected == null || emailselected == ''">Add User</span>
                <span v-else>Update User</span>

                <span class="check" @click="check(emailselected)"
                  >Data: {{ emailselected }}</span
                >
                <button
                  class="modal-default-button"
                  @click="$emit('close-modal'), (isOpen = false)"
                >
                  X
                </button>
              </div>
              <div class="infor">
                <div class="userid">
                  <input type="text" placeholder="User ID *" class="useridinput input" />
                </div>
                <div class="name">
                  <div class="firstname">
                    <input
                      type="text"
                      v-model="firstname"
                      placeholder="First Name *"
                      class="nameinput input"
                    />
                  </div>
                  <div class="lastname">
                    <input
                      type="text"
                      v-model="lastname"
                      placeholder="Last Name *"
                      class="nameinput input"
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
                    />
                    <!-- v-model="user.Email.value" -->
                    <input
                      type="text"
                      v-model="per"
                      placeholder="Mobile No"
                      class="nameinput input"
                    />
                    <select class="nameinput input">
                      <option disabled value="">Please select one</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                  <div class="detaildown">
                    <input type="text" placeholder="Username *" class="nameinput input" />
                    <input type="text" placeholder="Password*" class="nameinput input" />
                    <input
                      type="text"
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
                <div class="checkbox" v-for="option in options" :key="option.name">
                  <label class="moduleper">{{ option.name }}</label>
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
                    v-if="emailselected == null || emailselected == ''"
                    @click="addUser(user), $emit('close-modal'), (isOpen = false)"
                    class="buttonadd"
                  >
                    Add User
                  </button>
                  <button
                    v-else
                    @click="$emit('close-modal'), (isOpen = false), update()"
                    class="buttonadd"
                  >
                    Update User
                  </button>
                  <button
                    @click="$emit('close-modal'), (isOpen = false), cancel"
                    class="buttoncancel"
                  >
                    Cancel
                  </button>
                  <p>{{ userWithEmail }}</p>
                  <!-- <button @click="close(user)" class="buttoncancel">Cancel</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </template>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
const isOpen = ref(true);
import { useStore } from "vuex";

const store = useStore();
const users = ref(store.state.DataDashBoard.users);
const options = [
  { name: "Super Admin", permissions: ["read", "write", "delete"] },
  { name: "Admin", permissions: ["read", "write", "delete"] },
  { name: "Employee", permissions: ["read", "write", "delete"] },
  { name: "Lorem Ipsum", permissions: ["read", "write", "delete"] },
];

// const name = ref("");
const firstname = ref("");
const lastname = ref("");
const per = ref("");
const email = ref("");
// const newemail = ref("");
const userWithEmail = ref("");
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  emailselected: {
    type: String,
    default: null,
  },
});

const addUser = () => {
  users.value.push({
    id: users.value.length + 1,
    Name: firstname.value + lastname.value,
    Permission: per.value,
    Email: email.value,
  });

  alert(
    "Thêm user với tên: " +
      firstname.value +
      " " +
      lastname.value +
      ", permission: " +
      per.value +
      ", email: " +
      email.value +
      " thành công!" +
      ", isOpen: " +
      isOpen.value
  );
};
const check = (emailselected) => {
  const data = JSON.stringify(users.value.find((item) => item.Email === emailselected));

  alert("Data user: " + data);
};

onMounted(() => {
  const emailselected = props.emailselected;
  // alert("emailselected: " + emailselected);
  const user = users.value.find((item) => item.Email === emailselected);

  if (user) {
    const userdata = JSON.stringify(user);
    console.log("Data user: " + userdata);
    const nameParts = user.Name.split(" ");
    if (nameParts.length > 1) {
      firstname.value = nameParts[0];
      lastname.value = nameParts.slice(1).join(" ");
    } else {
      firstname.value = user.Name;
      lastname.value = "";
    }
    email.value = user.Email;
    per.value = user.Permission;
  } else {
    console.log("User not found!");
  }
});

const update = () => {
  const emailselected = props.emailselected;
  // alert("emailselected: " + emailselected);
  const user = users.value.find((item) => item.Email === emailselected);
  if (user) {
    user.Name = firstname.value + lastname.value;
    user.Permission = per.value;
    user.Email = email.value;
    console.log("Update Data: " + user.Name + "," + user.Permission + "," + user.Email);
  } else {
    console.log("Lỗi");
  }
  // newemail.value = user.Email;
  // console.log("New Email: " + user.Email);
  // store.commit("DataDashBoard/changeEmail", newemail.value);

  // alert("Data: " + newemail.value);
};

// const cancel = () => {
//   if (userWithEmail.value.length > 1) {
//     console.log("Data Lấy được: " + userWithEmail.value);
//   } else {
//     console.log("Không lấy được userwithemail");
//   }
// };
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
