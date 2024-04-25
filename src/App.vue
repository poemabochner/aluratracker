<template>
  <main class="columns is-gapless is-multiline main">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <FormularioTarefa/>
    </div>
  </main>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';

export default {
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa
  }
}
</script>

<style>
.main {
  background-color: aliceblue;
}
</style>
