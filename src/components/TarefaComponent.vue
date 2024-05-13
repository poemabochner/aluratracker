<template>
  <div class="box has-text-weight-bold has-background-info-light p-3 m-3">
    <div class="columns">
      <div class="column is-7 has-text-black">
        {{ tarefa.descricao }}
      </div>
      <div class="column">
        <cronometro-component :tempoEmSegundos="tarefa.duracaoEmSegundos"></cronometro-component>
      </div>
    </div>
  </div>
</template>

<script>
import CronometroComponent from './CronometroComponent.vue';

export default {
  components: { CronometroComponent },
  name: 'TarefaComponent',
  props: {
    tarefa: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
