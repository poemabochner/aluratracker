<template>
  <div class="box has-background-white">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="formulário para a criaçao de uma nova tarefa">
        <input type="text" class="text" placeholder="tarefa">
      </div>
      <div class="column">
        <TemporizadorComponent></TemporizadorComponent>
      </div>
    </div>
  </div>
</template>
<script>
import TemporizadorComponent from './TemporizadorComponent.vue';

export default {
  components: { TemporizadorComponent },
  name: 'FormularioTarefa'
}
</script>