<template>
  <main>
    <h2>Nuestros Productos</h2>
    <Products :products="products" @addToCart="handleAddToCart" />
  </main>
</template>

<script>

export default {
  components: {
    Products
  },
  data() {
    return {
      // No necesitas más productos aquí, los obtendrás del componente hijo
    }
  },
  methods: {
    handleAddToCart(product) {
      // Aquí puedes mostrar un mensaje de confirmación o realizar otras acciones
      console.log('Producto agregado al carrito:', product)
    }
  }
}
</script>