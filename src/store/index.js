import Vue from 'vue';
import Vuex from 'vuex';
import { mutation } from '..';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    uppy: {}
  },
  mutations: {
    ...mutation
  },
  actions: {},
  modules: {}
});
