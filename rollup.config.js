import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/uppy-vuex-store.js',
      format: 'es'
    },
    {
      file: 'dist/uppy-vuex-store.min.js',
      format: 'es',
      plugins: [terser()]
    }
  ]
};
