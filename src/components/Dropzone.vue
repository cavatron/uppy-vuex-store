<template>
  <div id="dropzone"></div>
</template>

<script>
import DragDrop from '@uppy/drag-drop';
import shortid from 'shortid';

export default {
  mounted() {
    this.$uppy.use(DragDrop, {
      id: `dropzone-${shortid.generate()}`,
      target: '#dropzone',
      width: '100%',
      height: '100%',
      note: 'Folders can only be added with drag and drop',
      locale: {
        strings: {
          dropHereOr: 'Drop files and folders here or click to browse'
        }
      }
    });
  }
};
</script>
