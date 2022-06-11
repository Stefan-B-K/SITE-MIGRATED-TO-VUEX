import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

app
  .use(router)
  .use(store)
  .component('base-badge', BaseBadge)
  .mount('#app');