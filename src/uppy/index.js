const mutationType = 'uppy/STATE_UPDATE';

export const uppyMutation = {
  [mutationType](state, payload) {
    state.uppy = Object.assign({}, state.uppy, payload);
  }
};

export default class VuexStore {
  constructor(options) {
    this.store = options.store;
  }

  setState(patch) {
    this.store.commit(mutationType, patch);
  }

  getState() {
    return this.store.state.uppy;
  }

  subscribe(cb) {
    let prevState = this.getState();
    return this.store.subscribe((mutation, state) => {
      if (mutation.type === this.mutationType) {
        if (prevState !== state) {
          const patch = getPatch(prevState, state);
          cb(prevState, state, patch);
          prevState = state;
        }
      }
    });
  }
}

function getPatch(prev, next) {
  const nextKeys = Object.keys(next);
  const patch = {};
  nextKeys.forEach(k => {
    if (prev[k] !== next[k]) patch[k] = next[k];
  });
  return patch;
}
