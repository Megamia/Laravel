import { ref } from "vue";

export default {
  namespaced: true,

  state: {
    users: ref([
      {
        Name: "David Wagner",
        Email: "david_wagner@example.com",
        CreateDate: "24 Otc, 2015",
        Role: "Lorem Ipsum",
        Permission: "Super Admin",
      },
      {
        Name: "Ina Hogan",
        Email: "windler.warren@runte.net",
        CreateDate: "24 Otc, 2015",
        Role: "Lorem Ipsum",
        Permission: "Admin",
      },
      {
        Name: "Devin Harmon",
        Email: "wintheiser_enos@yahoo.com",
        CreateDate: "18 Dec, 2015",
        Role: "Lorem Ipsum",
        Permission: "HR Admin",
      },
      {
        Name: "Lena Page",
        Email: "camila_ledner@gmail.com",
        CreateDate: "8 Otc, 2016",
        Role: "Lorem Ipsum",
        Permission: "Employee",
      },
      {
        Name: "Eula Horton",
        Email: "edula_dorton1221@gmail.com",
        CreateDate: "15 Jun, 2017",
        Role: "Lorem Ipsum",
        Permission: "Super Admin",
      },
      {
        Name: "Victoria Perez",
        Email: "terrill.wiza@hotmail.com",
        CreateDate: "12 Jan, 2019",
        Role: "Lorem Ipsum",
        Permission: "HR Admin",
      },
      {
        Name: "Cora Medina",
        Email: "hagenes.isai@hotmail.com",
        CreateDate: "21 July, 2020",
        Role: "Lorem Ipsum",
        Permission: "Employee",
      },
    ]),
  },
  getters: {
    // selectedUserName(state) {
    //   return state.users.Name;
    // },
  },

  mutations: {
    
  },
  
  actions: {
    // editUserAndOpen({ commit }, payload) {
    //   commit('editUser', payload.newUser);
    //   commit('setOpen', true);
    // },
  },
};
