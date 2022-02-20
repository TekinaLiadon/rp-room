<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="mr-2">
      </template>
      <template #end>
        f
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'

export default {
  name: 'Navbar',
  components: {
    Menubar
  },
  data () {
    return {
      items: [
        {
          label: 'Главная',
          icon: 'pi pi-fw pi-file',
          filter: true,
          to: '/'
        },
        {
          label: 'Боевка',
          icon: 'pi pi-fw pi-pencil',
          to: '/combat'
        },
        {
          label: 'Правила',
          icon: 'pi pi-fw pi-user',
          to: '/rule'
        },
        {
          label: 'Этика',
          icon: 'pi pi-fw pi-calendar',
          to: '/ethics'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
