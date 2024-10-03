<template>
    <div>
      <h2>Nuestros Productos</h2>
      <div class="product-list">
        <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p><strong>Precio:</strong> {{ product.price }} CLP</p>
          <button @click="addToCart(product)">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Camiseta Edición Limitada', description: 'Camiseta exclusiva de Cristino Violet', price: 19990, image: 'camiseta.jpg' },
          { id: 2, name: 'Gorra Urban Style', description: 'Gorra estilo urbano', price: 14990, image: 'gorra.jpg' },
          { id: 3, name: 'Chaqueta Streetwear', description: 'Chaqueta moderna para el día a día', price: 34990, image: 'chaqueta.jpg' }
        ]
      };
    },
    methods: {
      addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          console.log("Agregando producto a carrito");
          cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  };
  </script>