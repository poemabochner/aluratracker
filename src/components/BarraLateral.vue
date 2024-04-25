<template>
  <header>
    <h1>
      <img src="../assets/logo.png">
    </h1>
  </header>
</template>

<script>
export default {
  name: 'BarraLateral',
}
</script>

<style scoped>
header {
  padding: 1rem;
  background: #ff5bb5;
  width: 100%;
  height: 100vh;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>