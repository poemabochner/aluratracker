<template>
  <div class="box has-text-weight-bold has-background-info-light p-3 m-3">
    <div class="columns">
      <div class="column is-7 has-text-black">
        descriçao
      </div>
      <div class="column">
        <cronometro-component :tempoEmSegundos="15"></cronometro-component>
      </div>
    </div>

  </div>
</template>

<script>
import CronometroComponent from './CronometroComponent.vue'

export default {
  components: { CronometroComponent },
  name: 'TarefaComponent',
  
}
</script>

<style scoped>

</style>