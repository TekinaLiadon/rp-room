<template>
  <Navbar/>
  <div class="layout-content">
  <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
}

</style>
<script>
import Navbar from './components/app/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
