<template>
  <div class="box has-background-white">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="formulário para a criaçao de uma nova tarefa">
        <input type="text" class="text" placeholder="tarefa">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <cronometro-component :tempoEmSegundos="tempoEmSegundos"></cronometro-component>
          <button class="button" @click="iniciar()">
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CronometroComponent from './CronometroComponent.vue';

export default {
  components: { CronometroComponent },
  name: 'FormularioTarefa',
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0
    }
  },
  methods: {
    iniciar() {
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++
      }, 1000)
    },

    finalizar() {
      clearInterval(this.cronometro);
    }
  }
}
</script>