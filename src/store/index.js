import Vue from 'vue';
import Vuex from 'vuex';
import { uppyMutation } from '../uppy';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uppy: {}
  },
  mutations: {
    ...uppyMutation
  },
  actions: {},
  modules: {}
});
