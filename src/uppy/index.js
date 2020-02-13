// import cuid from 'cuid';
export const STATE_UPDATE = 'uppy/STATE_UPDATE';

// Pluck Uppy state from the Vuex store in the default location.
// const defaultSelector = id => {
//   console.log('id', id);
//   return state => {
//     console.log('state', state);
//     return state.uppy[id];
//   };
// };

export default class VuexStore {
  constructor(opts) {
    this._store = opts.store;
    // this._id = opts.id || cuid();
    // this._selector = opts.selector || defaultSelector(this._id);

    // Initialise the `uppy[id]` state key.
    this.setState({});
  }

  setState(patch) {
    this._store.commit(STATE_UPDATE, patch);
  }

  getState() {
    return this._store.state.uppy;
  }

  subscribe(cb) {
    let prevState = this.getState();
    return this._store.subscribe((mutation, state) => {
      if (prevState !== state) {
        const patch = getPatch(prevState, state);
        cb(prevState, state, patch);
        prevState = state;
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
