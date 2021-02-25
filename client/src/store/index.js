import { createStore } from 'vuex';

import contactModule from './modules/contact/index.js';
import quoteModule from './modules/quotes/index.js';

const store = createStore({
  modules: {
    contact: contactModule,
    quote: quoteModule
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store;