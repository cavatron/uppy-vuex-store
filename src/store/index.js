import Vue from 'vue';
import Vuex from 'vuex';
import { STATE_UPDATE } from '../uppy';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uppy: null
  },
  mutations: {
    [STATE_UPDATE](state, payload) {
      state.uppy = Object.assign({}, state.uppy, payload);
    }
  },
  actions: {},
  modules: {}
});
