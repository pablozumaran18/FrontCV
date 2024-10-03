<script setup>
import { ref, computed } from 'vue'
import Inicio from './Inicio.vue'
import cart from './Cart.vue'

const routes = {
  '/': Inicio,
  '/cart': cart
}

const currentPath = ref(window.location.hash.slice(1) || '/')  // Remueve el #
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash.slice(1) || '/'  // Remueve el #
})

const currentView = computed(() => {
  return routes[currentPath.value] || NotFound  // Asegúrate de tener NotFound
})
</script>

<template>
  <a href="/">Inicio</a>
  <a href="/cart">Carrito</a>
  <component :is="currentView" />
</template>

<script>
export default {
  name: 'Navegador'
}
</script>

<style scoped>
/* Estilos */
</style>
