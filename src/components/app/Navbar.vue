<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
      </template>
      <template #end>
        <Button label="Войти" icon="pi pi-user" class="p-button-info login" />
        <Button label="Регистрация" icon="pi pi-user" class="p-button-info" />
      </template>
    </Menubar>
    <Sidebar v-model:visible="visibleLeft" :baseZIndex="1000" class="sidebar-rp">
      <h3>Персонажи в игре</h3>
      <p>Никого нет</p>
      <Button label="Помощник по майнкрафту" class="p-button-link" />
      <br>
      <Button label="Калькулятор роста" class="p-button-link" />
      <h3>Недавняя активность</h3>
      <Button label="RedKey" class="p-button-link" />
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'

export default {
  name: 'Navbar',
  components: {
    Menubar,
    Button,
    Sidebar
  },
  data () {
    return {
      visibleLeft: false,
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
.login {
  margin-right: 1rem;
}
</style>
