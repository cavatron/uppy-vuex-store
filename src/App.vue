<template>
  <div id="app">
    <button id="uppy-select-files">select</button>
    <div id="dash"></div>
  </div>
</template>

<script>
import Dashboard from '@uppy/dashboard';
import { uppy } from './main';
export default {
  name: 'App',
  mounted() {
    uppy.use(Dashboard, {
      target: '#dash',
      inline: true
    });
  }
};
</script>
