import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Uppy from '@uppy/core';
import UppyVuexStore from '.';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';

const uppy = new Uppy({
  store: new UppyVuexStore({
    store
  })
});

Vue.config.productionTip = false;

Vue.prototype.$uppy = uppy;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
