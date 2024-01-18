import { createStore } from 'vuex';

const store = createStore({
    state: {
        bienvenueOpacity: 1,
    },
    mutations: {
        setBienvenueOpacity(state, opacity) {
            state.bienvenueOpacity = opacity;
        },
    },
    actions: {
        updateBienvenueOpacity({ commit }, opacity) {
            commit('setBienvenueOpacity', opacity);
        },
    },
});

export default store;