<template>
  <box-component>
    <div class="columns">
      <div class="column is-7 has-text-black">
        {{ tarefa.descricao || 'tarefa sem descriçao' }}
      </div>
      <div class="column">
        <cronometro-component :tempoEmSegundos="tarefa.duracaoEmSegundos"></cronometro-component>
      </div>
    </div>
  </box-component>
</template>

<script>
import BoxComponent from './BoxComponent.vue';
import CronometroComponent from './CronometroComponent.vue';

export default {
  components: { CronometroComponent, BoxComponent },
  name: 'TarefaComponent',
  props: {
    tarefa: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
