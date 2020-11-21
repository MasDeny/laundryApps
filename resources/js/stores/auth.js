import $axios from "../utils/api";

const state = () => ({});

const mutations = {};

const actions = {
    submit({ commit }, payload) {
        localStorage.setItem("token", null); //mereset local storage menjadi null
        commit("SET_TOKEN", null, { root: true }); //RESET STATE TOKEN MENJADI NULL
        //KARENA MUTATIONS SET_TOKEN BERADA PADA ROOT STORES, MAKA DITAMBAHKAN PARAMETER
        //{ root: true  }

        //MENGGUNAKAN PROMISE AGAR FUNGSI SELANJUTNYA BERJALAN KETIKA FUNGSI INI SELESAI
        return new Promise((resolve, reject) => {
            //MENGIRIM REQUEST KE SERVER DENGAN URI /login
            //DAN PAYLOAD ADALAH DATA YANG DIKIRIMKAN DARI COMPONENT LOGIN.VUE
            $axios
                .post("/login", payload)
                .then(response => {
                    // respon axios jika sukses
                    if (response.data.status == "success") {
                        //maka local storage dan state token diset menggunakan api server
                        localStorage.setItem("token", response.data.data);
                        commit("SET_TOKEN", response.data.data, { root: true });
                    } else {
                        commit(
                            "SET_ERRORS",
                            { invalid: "Email/Password Salah" },
                            { root: true }
                        );
                    }
                    // resolve berfungsi agar telah dianggap selesai
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        commit("SET_ERRORS", error.response.data.error, {
                            root: true
                        });
                    }
                });
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
