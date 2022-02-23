<template>
  <Editor v-model="value1" editorStyle="height: 320px"/>
</template>

<script>
import Editor from 'primevue/editor'
export default {
  name: 'Ethics',
  components: {
    Editor
  },
  data () {
    return {
      value1: '<div>Смотри какой <b>Прикол</b></div><div><br></div>'
    }
  }
}
</script>

<style scoped>

</style>
