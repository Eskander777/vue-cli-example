import { createApp } from 'vue';
import App from './App.vue';

import CardBase from './components/ui/CardBase.vue';
import ButtonBase from './components/ui/ButtonBase.vue';
import DialogBase from './components/ui/DialogBase.vue';

const app = createApp(App);

app.component('card-base', CardBase);
app.component('button-base', ButtonBase);
app.component('dialog-base', DialogBase);

app.mount('#app');
