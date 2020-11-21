const layoutModule = {
    namespaced: true,
    state: {
        layout: "default-layout"
    },
    mutations: {
        updateLayout(state, layout) {
            state.layout = layout;
        }
    },
    actions: {
        updateLayout({ commit }, layout) {
            commit("updateLayout", layout);
        }
    }
};

export default layoutModule;
