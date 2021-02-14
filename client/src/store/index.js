import { createStore } from 'vuex';

import contactModule from './modules/contact/index.js';

const store = createStore({
  modules: {
    contact: contactModule
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store;