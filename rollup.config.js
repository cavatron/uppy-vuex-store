import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/uppy-vuex-store.js',
      format: 'es'
    },
    {
      file: 'lib/uppy-vuex-store.min.js',
      format: 'es',
      plugins: [terser()]
    }
  ]
};
