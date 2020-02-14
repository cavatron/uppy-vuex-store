const UPPY_STATE_UPDATE = 'uppy/STATE_UPDATE';

export default class UppyVuexStore {
  constructor(options) {
    this.store = options.store;
  }

  setState(patch) {
    this.store.commit(UPPY_STATE_UPDATE, patch);
  }

  getState() {
    return this.store.state.uppy;
  }

  subscribe(cb) {
    let prevState = this.getState();
    return this.store.subscribe(mutation => {
      if (mutation.type === UPPY_STATE_UPDATE) {
        const nextState = this.getState();
        if (prevState !== nextState) {
          const patch = getPatch(prevState, nextState);
          cb(prevState, nextState, patch);
          prevState = nextState;
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

export const mutation = {
  [UPPY_STATE_UPDATE](state, patch) {
    state.uppy = Object.assign({}, state.uppy, patch);
  }
};
