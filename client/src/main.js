import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';

import BaseButton from "./components/base/BaseButton.vue";
import BaseModal from "./components/base/BaseModal.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-modal', BaseModal);

app.mount('#app')
