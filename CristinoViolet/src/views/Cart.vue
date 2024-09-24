<template>
    <div>
      <header>
        <nav>
          <h1>Tienda Cristino Violet</h1>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/cart">Carrito de Compras</router-link></li>
          </ul>
        </nav>
      </header>
  
      <main>
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
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    data() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) || []
      };
    },
    computed: {
      total() {
        return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      }
    },
    methods: {
      removeFromCart(item) {
        this.cart = this.cart.filter(product => product.id !== item.id);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    }
  };
  </script>
  
  <style>
  /* Same styles as before */
  </style>
  