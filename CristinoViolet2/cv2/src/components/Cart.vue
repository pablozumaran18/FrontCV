<template>
    <div class="cart">
      <h2>Carrito de Compras</h2>
      <div v-if="cart.length > 0">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <h3>{{ item.name }}</h3>
          <p>Precio: {{ item.price }} CLP</p>
          <p>Cantidad: {{ item.quantity }}</p>
          <button @click="removeFromCart(item)">Eliminar</button>
        </div>
        <h3>Total: {{ total }} CLP</h3>
      </div>
      <div v-else>
        <p>El carrito está vacío</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: Array
    },
    computed: {
      total() {
        return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      }
    },
    methods: {
      removeFromCart(item) {
        this.$emit('remove-item', item);
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
  }
  </style>
  