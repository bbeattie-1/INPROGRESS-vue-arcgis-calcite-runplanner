import './assets/main.css'
import "@esri/calcite-components/dist/calcite/calcite.css";
import '@esri/calcite-components/dist/components/calcite-shell';
import { createApp } from 'vue';
import { setAssetPath } from '@esri/calcite-components/dist/components';
import App from './App.vue';

setAssetPath(location.href);

createApp(App).mount('#app');
